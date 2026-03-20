```markdown
## 📦 What did I add/change?
<!-- One or two sentences describing the change -->


## 🎯 Test Type
<!-- Check all that apply -->
- [ ] 🚀 **Smoke** (Critical path)
- [ ] 🔄 **Regression** (Full journey)
- [ ] 🌙 **Nightly** (Edge cases/Visual)
- [ ] 🔌 **API** (Backend)
- [ ] ⚙️ **Config** (CI/CD, Fixtures)

## 🧪 How did I test it?
<!-- List commands ran -->
1. `npx playwright test --grep "@..."`
2. 
3. 

## ✅ Checklist
- [ ] Tests pass locally
- [ ] No `test.only` left in code
- [ ] No secrets hardcoded (using `.env`)
- [ ] `.env` is in `.gitignore`
- [ ] Tags added (`@smoke`, `@regression`, etc.)

## 📊 Results
```
Total: X | Passed: X | Failed: X | Duration: X min
```

## ⚠️ Breaking Changes?
- [ ] No
- [ ] Yes (explain below):


**Status**: Ready ✅
```