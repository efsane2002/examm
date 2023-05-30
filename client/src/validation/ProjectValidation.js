import * as yup from 'yup'

export const projectSchema = yup.object().shape({
     name: yup.string().min(3).max(20).required("name is required"),
     paragraf: yup.string().required("paragraf is required"),
     icon: yup.string().required("icon is required")
});
