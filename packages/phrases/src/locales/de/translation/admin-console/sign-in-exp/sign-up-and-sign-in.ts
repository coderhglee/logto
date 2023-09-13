const sign_up_and_sign_in = {
  identifiers_email: 'E-Mail Adresse',
  identifiers_phone: 'Telefonnummer',
  identifiers_username: 'Benutzername',
  identifiers_email_or_sms: 'E-Mail Adresse oder Telefonnummer',
  identifiers_none: 'Nicht zutreffend',
  and: 'und',
  or: 'oder',
  sign_up: {
    title: 'ANMELDEN',
    sign_up_identifier: 'Anmeldeidentifier',
    identifier_description:
      'Der Anmeldeidentifier ist erforderlich für die Kontoerstellung und muss in Ihrem Anmeldefenster enthalten sein.',
    sign_up_authentication: 'Authentifizierungseinstellung für die Anmeldung',
    authentication_description:
      'Alle ausgewählten Aktionen sind für Benutzer verpflichtend, um den Vorgang abzuschließen.',
    set_a_password_option: 'Erstellen Sie Ihr Passwort',
    verify_at_sign_up_option: 'Bei Anmeldung überprüfen',
    social_only_creation_description: '(Dies gilt nur für die Erstellung von Social-Accounts)',
  },
  sign_in: {
    title: 'ANMELDEN',
    sign_in_identifier_and_auth: 'Anmeldeidentifier und Authentifizierungseinstellungen',
    description:
      'Benutzer können sich über jede der verfügbaren Optionen anmelden. Passen Sie das Layout an, indem Sie die folgenden Optionen per Drag & Drop anordnen.',
    add_sign_in_method: 'Anmeldemethode hinzufügen',
    password_auth: 'Passwort',
    verification_code_auth: 'Verifizierungscode',
    auth_swap_tip:
      'Tauschen Sie die untenstehenden Optionen aus, um zu bestimmen, welche zuerst im Vorgang angezeigt wird.',
    require_auth_factor: 'Sie müssen mindestens einen Authentifizierungsfaktor auswählen.',
  },
  social_sign_in: {
    title: 'ANMELDEN MIT SOCIAL MEDIA',
    social_sign_in: 'Anmelden mit Social Media',
    description:
      'Abhängig von der obligatorischen Identifizierung, die Sie eingerichtet haben, wird Ihr Benutzer möglicherweise aufgefordert, bei der Anmeldung über den Social Connector eine Identifizierung bereitzustellen.',
    add_social_connector: 'Sozialen Connector hinzufügen',
    set_up_hint: {
      not_in_list: 'Nicht in der Liste?',
      set_up_more: 'Einrichten',
      go_to: 'andere Social Connectors jetzt.',
    },
  },
  tip: {
    set_a_password: 'Ein einmaliges Passwort für Ihren Benutzernamen ist ein Muss.',
    verify_at_sign_up:
      'Wir unterstützen derzeit nur überprüfte E-Mails. Ihre Benutzerbasis kann eine große Anzahl von E-Mail-Adressen von schlechter Qualität enthalten, wenn keine Validierung vorliegt.',
    password_auth:
      'Dies ist unerlässlich, da Sie die Option zum Setzen eines Passworts während des Anmeldeprozesses aktiviert haben.',
    verification_code_auth:
      'Dies ist unerlässlich, da Sie nur die Möglichkeit aktiviert haben, einen Verifizierungscode bei der Anmeldung bereitzustellen. Sie können das Kontrollkästchen deaktivieren, wenn die Passworteinrichtung im Anmeldeprozess erlaubt ist.',
    delete_sign_in_method:
      'Dies ist unerlässlich, da Sie {{identifier}} als obligatorischen Identifier ausgewählt haben.',
  },
  advanced_options: {
    title: 'ERWEITERTE OPTIONEN',
    enable_user_registration: 'Benutzerregistrierung aktivieren',
    enable_user_registration_description:
      'Aktivieren oder deaktivieren Sie die Benutzerregistrierung. Sobald deaktiviert, können Benutzer immer noch über die Admin-Konsole hinzugefügt werden, aber Benutzer können keine Konten mehr über die Anmelde-Benutzeroberfläche einrichten.',
  },
};

export default Object.freeze(sign_up_and_sign_in);
