import i18next from 'i18next';

export const composeValidators = (...validators) => (value) => validators.reduce((error, validator) => error || validator(value), undefined);

export const required = value => value ? undefined : i18next.languages[0] === 'en' ? 'This field shouldn’t be empty' : 'Bu alan boş bırakılmamalıdır';

export const email = value => (value && !/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i.test(value) ? i18next.languages[0] === 'en' ? 'Invalid email address' : 'Geçersiz e-posta adresi' : undefined);

export const maxFile = max => value => value && value.length > max ? i18next.languages[0] === 'en' ? `You can upload up to ${max} files.` : `En fazla ${max} adet dosya yükleyebilirsiniz.` : undefined;
export const maxTotalFileSize = max => value => value && (value.map(file => file.size).reduce((sum, file) => file + sum) > (max * 1048576)) ? i18next.languages[0] === 'en' ? `You can upload files of up to ${max} mb.` : `En fazla ${max} mb lık dosya yükleyebilirsiniz.` : undefined;

