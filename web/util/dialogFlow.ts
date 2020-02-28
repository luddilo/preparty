// Google credentials populated from Zeit secret OR local google_credentials.json file in next.config.js
export const projectId = process.env.project_id
export const defaultLangaugeCode = "en-US"

export const googleCredentials = {
  project_id: process.env.project_id,
  private_key: process.env.private_key,
  client_email: process.env.client_email
}
