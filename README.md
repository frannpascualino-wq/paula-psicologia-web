# Doctor Website Template (React + Vite)

This project is now structured as a reusable doctor website template.

## Main idea

To create a new doctor website, you should only need to:

1. Update doctor data in `src/data/doctors/<doctor-slug>.js`
2. Replace doctor assets in `public/doctors/<doctor-slug>/`

The current default profile is:

- `src/data/doctors/paula-cogorno.js`

## File structure

```text
src/
  components/
  config/
    theme.js
  data/
    doctors/
      paula-cogorno.js
      mara-esther-barrios.js
    doctorData.js
    content.js
  config.js

public/
  doctors/
    paula-cogorno/
      logo.png
      profile.jpg
      profile-alt.jpg
      office.jpg
```

## Duplicate for a new doctor

1. Duplicate this project/repository.
2. Create a folder: `public/doctors/<new-doctor-slug>/`
3. Add new assets (use placeholders unless approved official assets are provided).
4. Create or edit `src/data/doctors/<new-doctor-slug>.js`:
   - `profile`
   - `links` (Doctoralia, WhatsApp, tel, maps)
   - `assets` paths
   - `seo`
   - localized `content` (ES/PT)
5. Point `src/data/doctorData.js` to the new doctor export.
6. Run local checks:
   - `npm run dev`
   - `npm run build`
7. Deploy.

## Notes

- Bilingual toggle (ES/PT) is preserved.
- Styling/layout is unchanged; this refactor is data-driven only.
- Existing constants in `src/config.js` are kept as a compatibility layer over `doctorData.js`.
- This project can be used for visual demos; validate all data with each specialist before final publication.
