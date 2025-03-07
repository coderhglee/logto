import { withAppInsights } from '@logto/app-insights/react';
import type { Resource } from '@logto/schemas';
import { Theme } from '@logto/schemas';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import useSWR from 'swr';

import ApiResourceDark from '@/assets/icons/api-resource-dark.svg';
import ApiResource from '@/assets/icons/api-resource.svg';
import EmptyDataPlaceholder from '@/components/EmptyDataPlaceholder';
import ItemPreview from '@/components/ItemPreview';
import ListPage from '@/components/ListPage';
import { defaultPageSize } from '@/consts';
import { ApiResourceDetailsTabs } from '@/consts/page-tabs';
import CopyToClipboard from '@/ds-components/CopyToClipboard';
import Tag from '@/ds-components/Tag';
import type { RequestError } from '@/hooks/use-api';
import useSearchParametersWatcher from '@/hooks/use-search-parameters-watcher';
import useTenantPathname from '@/hooks/use-tenant-pathname';
import useTheme from '@/hooks/use-theme';
import { buildUrl } from '@/utils/url';

import GuideLibraryModal from './components/GuideLibraryModal';
import * as styles from './index.module.scss';

const pageSize = defaultPageSize;
const apiResourcesPathname = '/api-resources';
const createApiResourcePathname = `${apiResourcesPathname}/create`;
const buildDetailsPathname = (id: string) =>
  `${apiResourcesPathname}/${id}/${ApiResourceDetailsTabs.Settings}`;

function ApiResources() {
  const { search } = useLocation();
  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });

  const [{ page }, updateSearchParameters] = useSearchParametersWatcher({
    page: 1,
  });

  const url = buildUrl('api/resources', {
    page: String(page),
    page_size: String(pageSize),
  });

  const { data, error, mutate } = useSWR<[Resource[], number], RequestError>(url);

  const isLoading = !data && !error;
  const { navigate, match } = useTenantPathname();
  const theme = useTheme();
  const [apiResources, totalCount] = data ?? [];

  const ResourceIcon = theme === Theme.Light ? ApiResource : ApiResourceDark;
  const isCreating = match(createApiResourcePathname);

  return (
    <>
      <ListPage
        title={{
          title: 'api_resources.title',
          subtitle: 'api_resources.subtitle',
        }}
        pageMeta={{ titleKey: 'api_resources.page_title' }}
        createButton={{
          title: 'api_resources.create',
          onClick: () => {
            navigate({
              pathname: createApiResourcePathname,
              search,
            });
          },
        }}
        table={{
          rowGroups: [{ key: 'apiResources', data: apiResources }],
          rowIndexKey: 'id',
          isLoading,
          errorMessage: error?.body?.message ?? error?.message,
          columns: [
            {
              title: t('api_resources.api_name'),
              dataIndex: 'name',
              colSpan: 6,
              render: ({ id, name, isDefault }) => (
                <ItemPreview
                  title={name}
                  icon={<ResourceIcon className={styles.icon} />}
                  to={buildDetailsPathname(id)}
                  suffix={isDefault && <Tag>{t('api_resources.default_api')}</Tag>}
                />
              ),
            },
            {
              title: t('api_resources.api_identifier'),
              dataIndex: 'indicator',
              colSpan: 10,
              render: ({ indicator }) => <CopyToClipboard value={indicator} variant="text" />,
            },
          ],
          placeholder: <EmptyDataPlaceholder />,
          rowClickHandler: ({ id }) => {
            navigate(buildDetailsPathname(id));
          },
          onRetry: async () => mutate(undefined, true),
          pagination: {
            page,
            totalCount,
            pageSize,
            onChange: (page) => {
              updateSearchParameters({ page });
            },
          },
        }}
      />
      <GuideLibraryModal
        isOpen={isCreating}
        onClose={() => {
          navigate({
            pathname: apiResourcesPathname,
            search,
          });
        }}
      />
    </>
  );
}

export default withAppInsights(ApiResources);
