import { useContext, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import ReactModal from 'react-modal';

import PlanUsage from '@/components/PlanUsage';
import { contactEmailLink } from '@/consts';
import { subscriptionPage } from '@/consts/pages';
import { TenantsContext } from '@/contexts/TenantsProvider';
import Button from '@/ds-components/Button';
import FormField from '@/ds-components/FormField';
import InlineNotification from '@/ds-components/InlineNotification';
import ModalLayout from '@/ds-components/ModalLayout';
import useSubscriptionPlans from '@/hooks/use-subscription-plans';
import useTenantPathname from '@/hooks/use-tenant-pathname';
import * as modalStyles from '@/scss/modal.module.scss';

import PlanName from '../PlanName';

import * as styles from './index.module.scss';

function MauExceededModal() {
  const { currentTenant } = useContext(TenantsContext);
  const { usage, subscription } = currentTenant ?? {};

  const { t } = useTranslation(undefined, { keyPrefix: 'admin_console' });
  const { navigate } = useTenantPathname();

  const [hasClosed, setHasClosed] = useState(false);
  const handleCloseModal = () => {
    setHasClosed(true);
  };

  const { data: subscriptionPlans } = useSubscriptionPlans();

  const currentPlan = subscriptionPlans?.find((plan) => plan.id === subscription?.planId);

  if (!subscription || !usage || !currentPlan || hasClosed) {
    return null;
  }

  const {
    quota: { mauLimit },
    name: planName,
  } = currentPlan;

  const isMauExceeded = mauLimit !== null && usage.activeUsers >= mauLimit;

  if (!isMauExceeded) {
    return null;
  }

  return (
    <ReactModal
      isOpen
      shouldCloseOnEsc
      className={modalStyles.content}
      overlayClassName={modalStyles.overlay}
      onRequestClose={handleCloseModal}
    >
      <ModalLayout
        title="upsell.mau_exceeded_modal.title"
        footer={
          <>
            <a href={contactEmailLink} target="_blank" className={styles.linkButton} rel="noopener">
              <Button title="general.contact_us_action" />
            </a>
            <Button
              type="primary"
              title="upsell.upgrade_plan"
              onClick={() => {
                navigate(subscriptionPage);
                handleCloseModal();
              }}
            />
          </>
        }
        onClose={handleCloseModal}
      >
        <InlineNotification severity="error">
          <Trans
            components={{
              planName: <PlanName name={planName} />,
            }}
          >
            {t('upsell.mau_exceeded_modal.notification')}
          </Trans>
        </InlineNotification>
        <FormField title="subscription.plan_usage">
          <PlanUsage
            subscriptionUsage={usage}
            currentSubscription={subscription}
            currentPlan={currentPlan}
          />
        </FormField>
      </ModalLayout>
    </ReactModal>
  );
}

export default MauExceededModal;
