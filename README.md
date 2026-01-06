# Bamboo Shoots Website

## Project Structure

```
BambooShoots/
├── sanity/               # Sanity CMS Studio
│   ├── schemaTypes/      # Content schemas
│   ├── sanity.config.ts  # Studio configuration
│   └── package.json
│
└── astro/                # Astro Frontend
    ├── src/
    │   ├── components/   # UI components
    │   ├── layouts/      # Page layouts
    │   ├── lib/          # Utilities (Sanity client, i18n)
    │   ├── pages/        # Routes
    │   └── styles/       # Global CSS
    ├── public/           # Static assets
    └── package.json
```

## Getting Started

### 1. Sanity Setup

First, create a Sanity project at [sanity.io/manage](https://www.sanity.io/manage):

1. Create a new project
2. Copy your **Project ID**
3. Update both config files:
   - `sanity/sanity.config.ts` → replace `YOUR_PROJECT_ID`
   - `sanity/sanity.cli.ts` → replace `YOUR_PROJECT_ID`
   - `astro/.env` → add `PUBLIC_SANITY_PROJECT_ID=your-id`

```bash
cd sanity
npm install
npm run dev
```

Open http://localhost:3333 to access Sanity Studio.

### 2. Astro Setup

```bash
cd astro
cp .env.example .env
# Edit .env with your Sanity Project ID
npm install
npm run dev
```

Open http://localhost:4321 to see your website.

## Adding Content in Sanity

### Site Settings
1. Go to "Site Settings" in Sanity Studio
2. Upload your logo
3. Add social media URLs (Facebook, Instagram, YouTube)
4. Add donation links (BetterPlace, PayPal)
5. Set contact emails and bank account details

### Home Page
1. Go to "Home Page" 
2. Fill in all sections with DE/EN/KH translations
3. Upload hero image

### Team Members
1. Create a new "Team Member" document for each person
2. Add name, role (all 3 languages), photo, and description

### Donation Tiers
1. Create "Donation Tier" documents for each level
2. Set amount, title, and description in all languages

### Timeline Events
1. Create "Timeline Event" documents for each milestone
2. Add year, title, and optional description/image

### Gallery
1. Go back to "Home Page"
2. Add images to the gallery array
3. Include alt text and captions in all languages

## Deploying

### 1. GitHub Pages (Astro Frontend)

Die Website wird automatisch per GitHub Actions bereitgestellt.

1. Erstelle ein GitHub-Repository und pushe deinen Code.
2. Gehe zu **Settings > Secrets and variables > Actions** und füge folgende Secrets hinzu:
   - `PUBLIC_SANITY_PROJECT_ID`: Deine Sanity Projekt-ID (`ma7ksr0w`)
3. Gehe zu **Settings > Pages**:
   - Source: **GitHub Actions**
4. Pushe auf `main` – der Build startet automatisch.

### 2. Sanity Webhook (Auto-Rebuild)

Damit die Website bei Inhaltsänderungen in Sanity automatisch neu gebaut wird:

1. Gehe zu [sanity.io/manage](https://www.sanity.io/manage) → **API > Webhooks**.
2. Erstelle einen neuen Webhook:
   - **Name**: GitHub Deploy
   - **URL**: `https://api.github.com/repos/<USERNAME>/<REPO>/dispatches`
   - **Trigger on**: Create, Update, Delete
   - **Headers**:
     - `Accept`: `application/vnd.github.v3+json`
     - `Authorization`: `Bearer <GITHUB_TOKEN>` (Erstelle einen [Personal Access Token](https://github.com/settings/tokens) mit `repo` Scope)
   - **Payload group**: `{ "event_type": "sanity-content-update" }` (als JSON)

### 3. Sanity Studio
```bash
cd sanity
npm run deploy
```


## Languages

The site supports three languages via URL parameter:
- German (default): `/` or `/?lang=de`
- English: `/?lang=en`  
- Khmer: `/?lang=kh`

Content in Sanity uses `_de`, `_en`, `_kh` suffixed fields.
