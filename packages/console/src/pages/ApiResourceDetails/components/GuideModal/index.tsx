import Modal from 'react-modal';

import ModalHeader from '@/components/Guide/ModalHeader';
import * as modalStyles from '@/scss/modal.module.scss';

import ApiGuide from '../ApiGuide';

import * as styles from './index.module.scss';

type Props = {
  guideId: string;
  onClose: () => void;
};

function GuideModal({ guideId, onClose }: Props) {
  return (
    <Modal shouldCloseOnEsc isOpen className={modalStyles.fullScreen} onRequestClose={onClose}>
      <div className={styles.modalContainer}>
        <ModalHeader
          title="guide.api.modal_title"
          subtitle="guide.api.modal_subtitle"
          buttonText="guide.cannot_find_guide"
          requestFormFieldLabel="guide.describe_guide_looking_for"
          requestFormFieldPlaceholder="guide.api.describe_guide_looking_for_placeholder"
          requestSuccessMessage="guide.request_guide_successfully"
          onClose={onClose}
        />
        <ApiGuide className={styles.guide} guideId={guideId} onClose={onClose} />
      </div>
    </Modal>
  );
}

export default GuideModal;
