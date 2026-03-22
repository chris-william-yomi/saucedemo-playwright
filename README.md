# 🧪 Sauce Demo - Playwright Test Automation

End-to-end test automation framework for [Sauce Demo](https://www.saucedemo.com/) built with **Playwright**, **TypeScript**, and **GitHub Actions**.

---

## 📋 Table of Contents

- [Features](#-features)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running Tests](#-running-tests)
- [Test Architecture](#-test-architecture)
- [Project Structure](#-project-structure)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Reports](#-reports)
- [Commands Reference](#-commands-reference)
- [Troubleshooting](#-troubleshooting)

---

## ✨ Features

| Feature | Description |
| :--- | :--- |
| **Page Object Model** | Clean, maintainable page classes |
| **Test Fixtures** | Reusable setup (auto-login, auth state) |
| **Test Suites** | Smoke, Regression, Nightly, API |
| **Parallel Execution** | Run tests simultaneously for speed |
| **CI/CD Integration** | GitHub Actions workflows |
| **Secure Credentials** | GitHub Secrets + `.env` files |
| **HTML Reports** | Detailed test results with traces |
| **Allure Reports** | Professional test dashboards |
| **Video & Screenshots** | Auto-captured on test failure |
| **TypeScript** | Full type safety and IntelliSense |

---

## 🛠 Prerequisites

| Requirement | Version | Install Command |
| :--- | :--- | :--- |
| **Node.js** | 18+ | `node --version` |
| **npm** | 9+ | `npm --version` |
| **Git** | Latest | `git --version` |
| **VS Code** (optional) | Latest | [Download](https://code.visualstudio.com/) |

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/chris-william-yomi/saucedemo-playwright.git
cd saucedemo-playwright
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

### 4. Install Playwright Dependencies (Linux only)

```bash
npx playwright install --with-deps
```

---

## ⚙️ Configuration

### 1. Create `.env` File

Create a `.env` file in the project root (do **NOT** commit to Git):

```bash
# .env
BASE_URL=https://www.saucedemo.com
STANDARD_USER=standard_user
STANDARD_PASSWORD=secret_sauce
LOCKED_OUT_USER=locked_out_user
LOCKED_OUT_PASSWORD=secret_sauce
PROBLEM_USER=problem_user
PERFORMANCE_GLITCH_USER=performance_glitch_user
```

### 2. Verify `.gitignore`

Ensure `.env` is in your `.gitignore`:

```text
node_modules/
playwright-report/
test-results/
.allure/
.env
```

### 3. Configure GitHub Secrets (for CI/CD)

Go to your repository on GitHub:

1. **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret**
3. Add all variables from `.env` above

| Secret Name | Value |
| :--- | :--- |
| `BASE_URL` | `https://www.saucedemo.com` |
| `STANDARD_USER` | `standard_user` |
| `STANDARD_PASSWORD` | `secret_sauce` |
| `LOCKED_OUT_USER` | `locked_out_user` |
| `LOCKED_OUT_PASSWORD` | `secret_sauce` |

---

## 🏃 Running Tests

### Run All Tests

```bash
npx playwright test
```

### Run by Test Suite

```bash
# Smoke tests (critical paths)
npx playwright test --grep "@smoke"

# Regression tests (full coverage)
npx playwright test --grep "@regression"

# Nightly tests (edge cases, visual)
npx playwright test --grep "@nightly"

# API tests (backend)
npx playwright test --grep "@api"
```

### Run by Browser

```bash
# Chromium only
npx playwright test --project=chromium

# Firefox only
npx playwright test --project=firefox

# WebKit only
npx playwright test --project=webkit
```

### Run Specific Test File

```bash
npx playwright test tests/specs/smoke/login.spec.ts
```

### Run in Debug Mode

```bash
npx playwright test --debug
```

### Run with UI Mode

```bash
npx playwright test --ui
```

---

## 🏗 Test Architecture

### Test Suites

| Suite | Tag | Purpose | When to Run |
| :--- | :--- | :--- | :--- |
| **Smoke** | `@smoke` | Critical happy paths | Every commit/PR |
| **Regression** | `@regression` | Full user journeys | Every PR to main |
| **Nightly** | `@nightly` | Edge cases, visual, performance | Daily at 2 AM |
| **API** | `@api` | Backend endpoint validation | Every PR |

### Test Organization

```
tests/
├── specs/
│   ├── smoke/          # Fast, critical tests
│   ├── regression/     # Full coverage tests
│   ├── nightly/        # Deep coverage tests
│   └── api/            # API endpoint tests
├── pages/              # Page Object Model classes
├── fixtures/           # Shared setup (auth, data)
└── data/               # Public test data (JSON)
```

---

## 📁 Project Structure

```
saucedemo-playwright/
├── .env                          # 🔒 Local secrets (never commit)
├── .env.example                  # 📝 Template for team
├── .gitignore                    # 🚫 Ignored files
├── .github/
│   └── workflows/
│       ├── smoke.yml             # Smoke test pipeline
│       ├── regression.yml        # Regression test pipeline
│       ├── nightly.yml           # Nightly test pipeline
│       └── api-tests.yml         # API test pipeline
├── tests/
│   ├── specs/
│   │   ├── smoke/
│   │   ├── regression/
│   │   ├── nightly/
│   │   └── api/
│   ├── pages/
│   │   ├── LoginPage.ts
│   │   ├── ProductsPage.ts
│   │   ├── CartPage.ts
│   │   └── CheckoutPage.ts
│   ├── fixtures/
│   │   └── auth.fixture.ts
│   └── data/
│       └── products.json
├── playwright.config.ts          # Playwright configuration
├── playwright-report/            # HTML report (auto-generated)
├── test-results/                 # Videos, traces, screenshots
├── allure-results/               # Allure report data
└── package.json
```

---

## 🚀 CI/CD Pipeline

### Workflows

| Workflow | Trigger | Browsers | Timeout |
| :--- | :--- | :--- | :--- |
| **smoke.yml** | Push/PR to main | Chromium | 5 min |
| **regression.yml** | PR to main | All | 30 min |
| **nightly.yml** | Schedule (2 AM UTC) | All | 120 min |
| **api-tests.yml** | Push/PR to main | N/A | 15 min |

### How It Works

```
Developer pushes code
        ↓
GitHub Actions triggers
        ↓
Installs Node.js + Dependencies
        ↓
Installs Playwright Browsers
        ↓
Runs tests with secrets injected
        ↓
Uploads HTML report as artifact
        ↓
Pass/Fail status shown on PR
```

---

## 📊 Reports

### View HTML Report (Local)

```bash
npx playwright show-report
```

### View Allure Report (Local)

```bash
# Install Allure globally first
npm install -g allure-commandline

# Generate and open report
allure generate allure-results --clean
allure open
```

### Download CI/CD Reports

1. Go to GitHub Actions tab
2. Select a workflow run
3. Scroll to **Artifacts** section
4. Download `playwright-report.zip`
5. Extract and open `index.html`

---

## 📜 Commands Reference

| Command | Description |
| :--- | :--- |
| `npx playwright test` | Run all tests |
| `npx playwright test --grep "@smoke"` | Run smoke tests only |
| `npx playwright test --project=chromium` | Run on Chromium only |
| `npx playwright test --workers=4` | Run with 4 parallel workers |
| `npx playwright test --debug` | Run in debug mode (headed) |
| `npx playwright test --ui` | Open UI mode |
| `npx playwright show-report` | Open HTML report |
| `npx playwright show-trace trace.zip` | Open Trace Viewer |
| `npm run test:smoke` | Run smoke tests (if scripted) |
| `npm run test:regression` | Run regression tests (if scripted) |

---

## 🔧 Troubleshooting

### Tests Fail on CI but Pass Locally

| Issue | Solution |
| :--- | :--- |
| Missing credentials | Add GitHub Secrets in repository settings |
| `.env` not loaded | Ensure `dotenv` is configured in `playwright.config.ts` |
| Browser not installed | Run `npx playwright install --with-deps` |
| Timeout errors | Increase timeout in config or fix slow selectors |

### Common Errors

```bash
# Error: process.env.USERNAME is undefined
→ Add secrets to GitHub Settings → Secrets and variables → Actions

# Error: Executable doesn't exist
→ Run: npx playwright install

# Error: Cannot find module '@playwright/test'
→ Run: npm install
```

## 📚 Resources

| Resource | Link |
| :--- | :--- |
| Playwright Docs | https://playwright.dev |
| GitHub Actions | https://docs.github.com/en/actions |
| Allure Report | https://allurereport.org |
| Sauce Demo | https://www.saucedemo.com |

---

**Happy Testing!** 🎉
