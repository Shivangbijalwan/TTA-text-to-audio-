# TTA — Text to Audio
### Full Project Documentation

> **AI-Powered Voice Generation Platform**
> Transform any text into lifelike, professional-grade audio in seconds.

- 🌐 **Live App:** [https://tta-text-to-audio.vercel.app](https://tta-text-to-audio.vercel.app)
- 💻 **GitHub:** [https://github.com/Shivangbijalwan/TTA-text-to-audio-](https://github.com/Shivangbijalwan/TTA-text-to-audio-)
- 👤 **Created by:** [Shivang Bijalwan](https://shivang-website.vercel.app/)

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Target Audience](#2-target-audience)
3. [Key Features](#3-key-features)
4. [Tech Stack](#4-tech-stack)
5. [Project Structure](#5-project-structure)
6. [How It Works](#6-how-it-works)
7. [Voice Library](#7-voice-library)
8. [Pricing](#8-pricing)
9. [API Reference](#9-api-reference)
10. [Components Overview](#10-components-overview)
11. [Deployment](#11-deployment)
12. [Legal Pages](#12-legal-pages)
13. [FAQ](#13-faq)

---

## 1. Project Overview

**TTA (Text to Audio)** is a web-based AI voice generation platform that converts written text into natural-sounding, professional-quality audio. Built for speed and simplicity, TTA removes the need for expensive studio equipment, microphones, or voice actors.

Users simply paste their text, select a voice, and download their audio file — all within seconds.

**Core value proposition:**
- No studio required
- No microphone needed
- No voice actor costs
- Ready in under 10 seconds

---

## 2. Target Audience

| User Type | Use Case |
|---|---|
| **Podcasters** | Generate narrations, intros, promos |
| **Content Creators** | Voiceovers for YouTube, Reels, TikTok |
| **Video Editors** | Quick audio for client projects |
| **Businesses** | IVR, explainer videos, product demos |
| **Teachers / Educators** | Lecture audio, e-learning content |
| **Writers / Bloggers** | Audio versions of articles |

---

## 3. Key Features

### 🎙 Ultra-Realistic Voices
- 50+ AI voices across male, female, and neutral tones
- Multiple accents and languages supported
- Sounds human — every time

### ⚡ Instant Generation
- Audio ready in under 10 seconds
- No queues, no waiting
- Works even for long documents

### 🎛 Voice Customization
- Control **speed**, **pitch**, **pauses**, and **tone**
- Fine-tune the output to match your brand or content style

### 📥 Download & Share
- Export as **MP3**
- Use anywhere: social media, apps, presentations, podcasts

### 🔴 Live Preview
- Real-time audio preview before downloading
- Powered by TTA's custom-built engine trained on thousands of hours of voice data

### 🌍 Multi-Language Support
- Supports all major national and international languages

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | Next.js (App Router), TypeScript, React |
| **Styling** | CSS Modules / globals.css |
| **Backend / API** | Node.js via Next.js API Routes |
| **TTS Engine** | AI-powered TTS via `/api/tts` route |
| **Deployment** | Vercel |
| **Package Manager** | npm |

---

## 5. Project Structure

```
landing-page/
├── app/
│   ├── api/
│   │   └── tts/
│   │       └── route.ts          # TTS API endpoint
│   ├── favicon.ico
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Main entry page
│
├── components/
│   ├── about.tsx                 # About section
│   ├── FAQ.tsx                   # FAQ accordion
│   ├── features.tsx              # Features section
│   ├── footer.tsx                # Site footer
│   ├── GetstartedButton.tsx      # CTA button component
│   ├── howwork.tsx               # How it works section
│   ├── MainController.tsx        # Core TTS controller UI
│   ├── navbar.tsx                # Navigation bar
│   ├── pricing.tsx               # Pricing section
│   └── voiceBars.tsx             # Animated voice visualizer
│
├── public/
│   ├── icon/                     # App icons
│   ├── logo.png                  # Brand logo
│   └── og.png                    # Open Graph image
│
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts                # Next.js configuration
├── package-lock.json
└── package.json
```

---

## 6. How It Works

TTA follows a simple 3-step flow:

```
Step 1: Paste Your Text
        └── Type or paste any text (blog post, script, article, sentence)

Step 2: Pick a Voice
        └── Choose language, accent, and voice style from the library
            └── Filter by: Gender, Tone (Calm / Cheerful / Friendly / etc.)

Step 3: Download & Use
        └── Hit Generate
            └── Audio file (MP3) ready in under 10 seconds
                └── Download and use anywhere
```

### Under the Hood
- User input is sent to the `/api/tts` Next.js API route
- The backend processes the request using the AI TTS engine
- Generated audio is returned and rendered in the browser audio player
- User can download the output as an MP3

---

## 7. Voice Library

TTA offers 8+ pre-built voices (with 50+ in the full library), filterable by:

| Filter | Options |
|---|---|
| **Gender** | Female, Male |
| **Tone** | Calm, Cheerful, Friendly, Confident, Casual, Neutral |

### Sample Voices

| Name | Tone | Gender |
|---|---|---|
| Jenny | Friendly | Female |
| Aria | Cheerful | Female |
| Sonia | Calm | Female |
| Natasha | Neutral | Female |
| Guy | Neutral | Male |
| Davis | Casual | Male |
| Ryan | Calm | Male |
| William | Neutral | Male |

---

## 8. Pricing

TTA is currently **completely free** to use.

| Plan | Price | Includes |
|---|---|---|
| **Free** | ₹0 / month | Unlimited characters, multiple voices & tones, MP3 download, multiple languages |

> No credit card required. No sign-up needed.

---

## 9. API Reference

### `POST /api/tts`

Converts input text to audio.

**Request Body:**
```json
{
  "text": "Your text to convert",
  "voice": "Jenny",
  "tone": "Friendly"
}
```

**Response:**
```
Audio stream / MP3 file
```

> Note: Full API parameter details (speed, pitch, language, etc.) may vary based on the underlying TTS engine configuration in `route.ts`.

---

## 10. Components Overview

| Component | Purpose |
|---|---|
| `navbar.tsx` | Top navigation bar with branding and links |
| `about.tsx` | "Your Words, Heard Loudly" — product intro section |
| `features.tsx` | Highlights key features (voices, speed, customization, download) |
| `howwork.tsx` | 3-step user flow explanation |
| `MainController.tsx` | Core UI — text input, voice selector, generate + download |
| `voiceBars.tsx` | Animated audio waveform/bars visualizer |
| `pricing.tsx` | Pricing plans display |
| `FAQ.tsx` | Accordion-style FAQ section |
| `GetstartedButton.tsx` | Reusable CTA button that anchors to the model/demo |
| `footer.tsx` | Footer with links to Privacy Policy, Terms, Contact |

---

## 11. Deployment

TTA is deployed on **Vercel** with automatic CI/CD from the GitHub repository.

### Deploy Your Own

```bash
# 1. Clone the repository
git clone https://github.com/Shivangbijalwan/TTA-text-to-audio-.git

# 2. Navigate to the landing page
cd TTA-text-to-audio-/landing-page

# 3. Install dependencies
npm install

# 4. Run development server
npm run dev

# 5. Open in browser
# http://localhost:3000
```

### Environment Variables
Add any required API keys for the TTS engine in a `.env.local` file:
```
TTS_API_KEY=your_key_here
```

### Production Build
```bash
npm run build
npm start
```

---

## 12. Legal Pages

TTA includes two legal pages, both live and linked in the footer.

| Page | URL | File Location |
|---|---|---|
| **Privacy Policy** | [https://tta-text-to-audio.vercel.app/privacy-policy](https://tta-text-to-audio.vercel.app/privacy-policy) | `app/privacy-policy/page.tsx` |
| **Terms of Service** | [https://tta-text-to-audio.vercel.app/terms](https://tta-text-to-audio.vercel.app/terms) | `app/terms/page.tsx` |

### Privacy Policy covers:
- What data TTA collects (text input, usage data, cookies)
- How data is used and not permanently stored
- Third-party services (Vercel, TTS engine)
- User rights under GDPR / India IT Act
- Children's privacy (under 13)

### Terms of Service covers:
- Acceptable use policy (no hate speech, fraud, impersonation)
- Ownership of submitted text and generated audio
- TTA's intellectual property rights
- Disclaimer of warranties and limitation of liability
- Governing law: **India / Uttarakhand**

### Footer Integration

Both pages are linked in `components/footer.tsx`:

```tsx
<a href="/privacy-policy">Privacy Policy</a>
<a href="/terms">Terms of Service</a>
```

---

## 13. FAQ

**Q: What is TTA and how does it work?**
TTA converts your text into realistic AI-generated audio using advanced voice synthesis technology. Just paste text, pick a voice, and download.

**Q: Is TTA free to use?**
Yes. TTA is fully free with no usage limits currently.

**Q: How realistic do the voices sound?**
Voices are designed to be natural, expressive, and human-like with multiple accents and tones.

**Q: What file formats can I download?**
MP3 format is supported for download.

**Q: Does TTA support different languages?**
Yes. TTA supports all major national and international languages.

---

## Legal

- [Privacy Policy](https://tta-text-to-audio.vercel.app/privacy-policy)
- [Terms of Service](https://tta-text-to-audio.vercel.app/terms)
- [Contact](https://shivang-website.vercel.app/)

---

*Documentation last updated: May 2026*
*Created by Shivang Bijalwan*
