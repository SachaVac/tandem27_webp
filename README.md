# TANDEM '27 · Pernink

Statický dvojjazyčný web pro česko-německý tandem 1.–14. srpna 2027 v Perninku. Je vytvořený v čistém HTML, CSS a JavaScriptu — bez frameworků, build procesu nebo závislosti na backendu.

## Lokální spuštění

Stačí otevřít `index.html` v prohlížeči. Pro lokální vývoj lze také spustit jednoduchý server v této složce:

```bash
python3 -m http.server 8000
```

Pak otevři <http://localhost:8000>.

## Nasazení přes GitHub Pages

1. Vytvoř na GitHubu nový veřejný nebo soukromý repozitář, například `tandem-pernink-2027`.
2. Nahraj do kořenové složky repozitáře soubory `index.html`, `styles.css`, `script.js`, `favicon.svg` a `README.md`.
3. V repozitáři otevři **Settings → Pages**.
4. V části **Build and deployment** vyber **Deploy from a branch**.
5. Jako branch zvol `main` a složku `/ (root)`, potom ulož.
6. Po dokončení publikování bude web dostupný na adrese podobné `https://TVUJ-UCET.github.io/tandem-pernink-2027/`.

## Co web obsahuje

- úvodní obrazovku pro výběr češtiny nebo němčiny;
- plně přeložený obsah webu v obou jazycích;
- responzivní rozvržení pro telefon, tablet i počítač;
- mobilní navigaci, rozbalovací FAQ a náhodný generátor letních aktivit;
- balicí checklist, jehož stav se ukládá v `localStorage` daného prohlížeče;
- retro vizuální styl inspirovaný weby a grafikou 90. let.

## Co bude vhodné doplnit před zveřejněním

- název a adresu chaty v Perninku;
- konkrétní místa a termíny čtyř celodenních výletů;
- informace o přihlášení, ceně, dopravě, kontaktní osobě a případně věkovém omezení;
- fotografie, pokud budete chtít nahradit nebo doplnit ilustrační grafiku.

Poznámka: balicí seznam se ukládá pouze v konkrétním prohlížeči návštěvníka. Není sdílený mezi zařízeními ani odesílán pořadatelům.
