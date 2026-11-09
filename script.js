const content = {
  cs: {
    lang: 'cs',
    nav: [['about', 'O tandemu'], ['program', 'Program'], ['trips', 'Výpravy'], ['evenings', 'Večery'], ['play', 'Letní randomizer']],
    ticker: ['ČESKO × NĚMECKO', 'PERNINK · KRUŠNÉ HORY', '1.–14. SRPNA 2027', 'JAZYKY, VÝLETY, HUDBA A LETNÍ POHODA'],
    topCta: 'DALŠÍ INFO', tripLabel: 'CELODENNÍ VÝLET', screenTitle: 'GENERÁTOR AKTIVIT v1.0', screenRec: '● NAHRÁVÁM', screenFooter: 'STISKNĚTE TLAČÍTKO!', screenInitial: '???',
    heroEyebrow: 'DVA TÝDNY · DVA JAZYKY · JEDNO LÉTO',
    heroTitle: 'Mluv.\nPoznávej.\n<em>Užij si to.</em>',
    heroLead: 'Česko-německý tandem v Perninku. Dopoledne se učíme, odpoledne objevujeme a večer tvoříme příběhy, na které se nezapomíná.',
    heroPrimary: 'CO JE TANDEM? ↘', heroSecondary: 'NAKOUKNOUT NA PROGRAM ↓',
    heroMeta: [['▣', '1.–14. 8. 2027'], ['⌖', 'Pernink, Krušné hory'], ['↔', 'CZ + DE']],
    heroBottom: 'PŘIPRAV SI DOBROU NÁLADU A POHODLNÉ BOTY ★',
    introIndex: 'O NÁS',
    introTitle: 'Jeden jazyk navíc. Spousta zážitků k tomu.',
    introText: 'Tandem je setkání českých a německých účastníků, kteří se chtějí poznat, rozmluvit a užít si společné dva týdny. Jazyk není překážka — je to naše společná hra. Budeme se učit navzájem, zkoušet nové věci a poznávat Pernink i okolí.',
    programIndex: 'JAK TO BUDE',
    programTitle: 'Každý den trochu jiný. A přitom tak akorát.',
    programIntro: 'Pevný rytmus nám dá prostor na jazyk, společný program i chvíle, kdy si každý může dělat svoje.',
    flow: [
      { time: 'DOPOLEDNE', icon: '📚', title: 'Jazykový start', text: 'Hravá výuka češtiny a němčiny, konverzace, hry a malé výzvy. Učíme se spolu, ne proti sobě.' },
      { time: 'ODPOLEDNE', icon: '🌲', title: 'Společný program', text: 'Aktivity venku i uvnitř, poznávání okolí, týmové hry a tvoření. Některá odpoledne zůstanou volná.' },
      { time: 'VEČER', icon: '🎸', title: 'Čas být spolu', text: 'Kytara, zpívání, tanec, tematické večery a třeba i společná návštěva hospody.' }
    ],
    programNote: 'Čtyři dny vyrazíme na celodenní výlet do okolí. Konkrétní plán a denní rozpis zveřejníme, až budou domluvené podrobnosti.',
    tripsIndex: 'VEN Z CHALUPY',
    tripsTitle: 'Čtyři dny na cestách.',
    tripsIntro: 'Čekají nás čtyři celodenní výlety do okolí. Kam přesně? To právě chystáme — těš se na objevování Krušných hor a míst kolem.',
    trips: [
      ['01', '🥾', 'Výprava #1', 'Celý den venku. Cíl a trasa budou upřesněny.'],
      ['02', '🗺️', 'Výprava #2', 'Další místo k objevování v okolí Perninku.'],
      ['03', '🚞', 'Výprava #3', 'Společná cesta za novými zážitky.'],
      ['04', '🌄', 'Výprava #4', 'Poslední celodenní dobrodružství — zatím tajemství!']
    ],
    eveningsIndex: 'PO ZÁPADU SLUNCE',
    posterTitle: 'Večer\nžije!', posterSubtitle: 'Hudba · tanec · lidi · letní noci',
    eveningsTitle: 'A domů? Až bude po všem.',
    eveningsText: 'Večery budou patřit společnému času. Vezmi hlas, taneční kroky nebo jen dobrou náladu. Některé večery dostanou téma, jindy vytáhneme kytaru a zazpíváme si. A třeba dojde i na hospodu.',
    eveningTags: ['🎤 Zpívání', '🎸 Kytara', '🪩 Tanec', '🎭 Tematické večery', '🍻 Možná hospoda'],
    playIndex: 'LETNÍ RANDOMIZER',
    activityTitle: 'Nevíš, co podniknout? Losni si léto.',
    activityText: 'Klikni a nech náhodu rozhodnout, jaká letní aktivita tě dneska čeká. Některé nápady jsou malé, jiné trochu bláznivé.',
    activityButton: 'VYLOSOVAT AKTIVITU ↻',
    activities: ['Najdi nejhezčí místo na západ slunce.', 'Nauč někoho českou nebo německou frázi.', 'Uspořádejte mini turnaj v čemkoli.', 'Vyfoťte společnou letní pohlednici.', 'Vymysli refrén k tandemové hymně.', 'Dejte si procházku bez mobilů.', 'Udělejte piknik z toho, co máte.', 'Zahrajte si venku slovní fotbal.', 'Najdi tři věci, které vás spojují.', 'Zorganizujte spontánní taneční pauzu.'],
    packingIndex: 'NEZAPOMEŇ',
    packingTitle: 'Co si hodit do batohu?',
    packingText: 'Malý checklist na cestu. Zaškrtni, co už máš sbaleno — seznam se uloží v tomto prohlížeči.',
    packingItems: ['Pohodlné boty', 'Pláštěnka / bunda', 'Plavky a ručník', 'Láhev na vodu', 'Opalovací krém', 'Baterka', 'Zápisník a tužka', 'Něco na večerní párty', 'Osobní léky', 'Dobrá nálada'],
    resetList: 'Vynulovat seznam ↺',
    faqIndex: 'DOBRÉ VĚDĚT', faqTitle: 'Ještě pár praktických věcí.',
    faqIntro: 'Některé organizační detaily se ještě ladí. Jakmile budou potvrzené, doplníme je sem.',
    faq: [
      ['Kde přesně budeme bydlet?', 'Tandem se uskuteční v Perninku v Krušných horách. Konkrétní chata zatím není potvrzená — název a adresu doplníme, jakmile bude ubytování domluvené.'],
      ['Co když neumím dobře česky nebo německy?', 'To vůbec nevadí. Tandem je právě o tom, že se jazyky učíme společně. Důležitá je chuť komunikovat, zkoušet a pomáhat si.'],
      ['Bude program každý den od rána do večera?', 'Ne. Vedle společných aktivit počítáme i s volnějšími odpoledni, odpočinkem, koupáním u rybníka a obyčejnými letními radostmi.'],
      ['Kdy zveřejníte přesný program a další informace?', 'Podrobnější harmonogram, informace k přihlášení, ceně, dopravě a seznam věcí s sebou doplníme, jakmile budou organizačně potvrzené.']
    ],
    footerText: 'Dva týdny, které mohou začít jedním „Ahoj“ nebo „Hallo“. Těšíme se na tebe!',
    backTop: 'ZPĚT NAHORU ↑',
    progress: (n, total) => `SBALENO: ${n} / ${total}`,
    faqOpen: 'Otevřít odpověď', faqClose: 'Zavřít odpověď'
  },
  de: {
    lang: 'de',
    nav: [['about', 'Über den Tandem'], ['program', 'Programm'], ['trips', 'Ausflüge'], ['evenings', 'Abende'], ['play', 'Sommer-Generator']],
    ticker: ['TSCHECHIEN × DEUTSCHLAND', 'PERNINK · ERZGEBIRGE', '1.–14. AUGUST 2027', 'SPRACHEN, AUSFLÜGE, MUSIK UND SOMMERFEELING'],
    topCta: 'WEITERE INFOS', tripLabel: 'GANZTAGESAUSFLUG', screenTitle: 'AKTIVITÄTEN-GENERATOR v1.0', screenRec: '● REC', screenFooter: 'DRÜCK DEN KNOPF!', screenInitial: '???',
    heroEyebrow: 'ZWEI WOCHEN · ZWEI SPRACHEN · EIN SOMMER',
    heroTitle: 'Reden.\nEntdecken.\n<em>Erleben.</em>',
    heroLead: 'Ein deutsch-tschechisches Tandem in Pernink. Vormittags lernen wir, nachmittags entdecken wir die Umgebung und abends sammeln wir Geschichten fürs Leben.',
    heroPrimary: 'WAS IST TANDEM? ↘', heroSecondary: 'ZUM PROGRAMM ↓',
    heroMeta: [['▣', '1.–14.08.2027'], ['⌖', 'Pernink, Erzgebirge'], ['↔', 'CZ + DE']],
    heroBottom: 'GUTE LAUNE UND BEQUEME SCHUHE NICHT VERGESSEN ★',
    introIndex: 'ÜBER UNS',
    introTitle: 'Eine Sprache mehr. Jede Menge Erlebnisse dazu.',
    introText: 'Das Tandem bringt tschechische und deutsche Teilnehmende zusammen, die sich kennenlernen, miteinander sprechen und zwei gemeinsame Wochen erleben möchten. Die Sprache ist kein Hindernis — sie ist unser gemeinsames Spiel. Wir lernen voneinander, probieren Neues aus und entdecken Pernink und die Umgebung.',
    programIndex: 'SO LÄUFT ES',
    programTitle: 'Jeder Tag ein bisschen anders. Und genau richtig.',
    programIntro: 'Ein gemeinsamer Rhythmus gibt uns Zeit für Sprachen, Aktivitäten und Momente, in denen jede und jeder einfach das Eigene machen kann.',
    flow: [
      { time: 'VORMITTAGS', icon: '📚', title: 'Sprachlicher Start', text: 'Spielerischer Tschechisch- und Deutschunterricht, Gespräche, Spiele und kleine Herausforderungen. Wir lernen miteinander, nicht gegeneinander.' },
      { time: 'NACHMITTAGS', icon: '🌲', title: 'Gemeinsame Aktivitäten', text: 'Aktivitäten drinnen und draußen, die Umgebung entdecken, Teamspiele und Kreatives. Einige Nachmittage bleiben frei.' },
      { time: 'ABENDS', icon: '🎸', title: 'Zeit miteinander', text: 'Gitarre, gemeinsames Singen, Tanzen, Themenabende und vielleicht auch ein gemeinsamer Besuch im Gasthaus.' }
    ],
    programNote: 'An vier Tagen machen wir einen Ganztagesausflug in die Umgebung. Den konkreten Plan und Tagesablauf veröffentlichen wir, sobald alle Einzelheiten feststehen.',
    tripsIndex: 'RAUS AUS DEM HAUS',
    tripsTitle: 'Vier Tage unterwegs.',
    tripsIntro: 'Vier Ganztagesausflüge in die Umgebung warten auf uns. Wohin genau? Das planen wir gerade — freu dich darauf, das Erzgebirge und die Region zu entdecken.',
    trips: [
      ['01', '🥾', 'Ausflug #1', 'Ein ganzer Tag draußen. Ziel und Route folgen.'],
      ['02', '🗺️', 'Ausflug #2', 'Ein weiterer Ort in der Umgebung von Pernink.'],
      ['03', '🚞', 'Ausflug #3', 'Gemeinsam unterwegs zu neuen Erlebnissen.'],
      ['04', '🌄', 'Ausflug #4', 'Das letzte Ganztagesabenteuer — noch geheim!']
    ],
    eveningsIndex: 'NACH SONNENUNTERGANG',
    posterTitle: 'Der Abend\nlebt!', posterSubtitle: 'Musik · Tanz · Menschen · Sommernächte',
    eveningsTitle: 'Nach Hause? Wenn der Abend vorbei ist.',
    eveningsText: 'Die Abende gehören der gemeinsamen Zeit. Bring deine Stimme, deine Tanzschritte oder einfach gute Laune mit. Manche Abende haben ein Motto, an anderen holen wir die Gitarre heraus und singen zusammen. Vielleicht geht es auch in ein Gasthaus.',
    eveningTags: ['🎤 Singen', '🎸 Gitarre', '🪩 Tanzen', '🎭 Themenabende', '🍻 Vielleicht ins Gasthaus'],
    playIndex: 'SOMMER-GENERATOR',
    activityTitle: 'Keine Idee? Lass den Sommer entscheiden.',
    activityText: 'Klick und lass den Zufall entscheiden, welche Sommeraktivität heute auf dich wartet. Manche Ideen sind klein, andere ein bisschen verrückt.',
    activityButton: 'AKTIVITÄT AUSWÄHLEN ↻',
    activities: ['Finde den schönsten Ort für den Sonnenuntergang.', 'Bring jemandem einen tschechischen oder deutschen Satz bei.', 'Organisiert ein Mini-Turnier — ganz egal worin.', 'Macht gemeinsam eine Sommer-Postkarte als Foto.', 'Erfinde den Refrain für unsere Tandem-Hymne.', 'Macht einen Spaziergang ohne Handys.', 'Macht ein Picknick mit dem, was gerade da ist.', 'Spielt draußen eine Wortkette.', 'Findet drei Dinge, die euch verbinden.', 'Macht spontan eine Tanzpause.'],
    packingIndex: 'NICHT VERGESSEN',
    packingTitle: 'Was kommt in den Rucksack?',
    packingText: 'Eine kleine Packliste für die Reise. Hake ab, was schon im Gepäck ist — die Liste wird in diesem Browser gespeichert.',
    packingItems: ['Bequeme Schuhe', 'Regenjacke / Jacke', 'Badesachen und Handtuch', 'Trinkflasche', 'Sonnencreme', 'Taschenlampe', 'Notizbuch und Stift', 'Etwas für die Abendparty', 'Persönliche Medikamente', 'Gute Laune'],
    resetList: 'Liste zurücksetzen ↺',
    faqIndex: 'GUT ZU WISSEN', faqTitle: 'Noch ein paar praktische Infos.',
    faqIntro: 'Einige organisatorische Details werden noch geklärt. Sobald alles bestätigt ist, ergänzen wir die Informationen hier.',
    faq: [
      ['Wo genau werden wir übernachten?', 'Der Tandem findet in Pernink im Erzgebirge statt. Das konkrete Ferienhaus ist noch nicht bestätigt — Name und Adresse ergänzen wir, sobald die Unterkunft feststeht.'],
      ['Was ist, wenn ich noch nicht gut Tschechisch oder Deutsch spreche?', 'Das ist überhaupt kein Problem. Beim Tandem lernen wir die Sprachen gemeinsam. Wichtig sind Lust auf Kommunikation, Neugier und gegenseitige Unterstützung.'],
      ['Gibt es jeden Tag von morgens bis abends Programm?', 'Nein. Neben den gemeinsamen Aktivitäten planen wir auch freie Nachmittage, Zeit zum Ausruhen, einen Besuch am Teich und ganz normale sommerliche Unternehmungen.'],
      ['Wann gibt es das genaue Programm und weitere Informationen?', 'Den detaillierten Zeitplan sowie Informationen zu Anmeldung, Kosten, Anreise und Packliste ergänzen wir, sobald die Organisation bestätigt ist.']
    ],
    footerText: 'Zwei Wochen, die mit einem einzigen „Ahoj“ oder „Hallo“ beginnen können. Wir freuen uns auf dich!',
    backTop: 'NACH OBEN ↑',
    progress: (n, total) => `EINGEPACKT: ${n} / ${total}`,
    faqOpen: 'Antwort öffnen', faqClose: 'Antwort schließen'
  }
};

const $ = (selector) => document.querySelector(selector);
let currentLang = 'cs';

function setText(selector, value) { const node = $(selector); if (node) node.textContent = value; }
function renderLanguage(lang) {
  currentLang = lang;
  const t = content[lang];
  document.documentElement.lang = t.lang;
  $('#welcome').classList.add('hidden');
  $('#site').classList.remove('hidden');
  $('#main-nav').innerHTML = t.nav.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('');
  setText('#lang-switch', 'CZ / DE ↗');
  $('#lang-switch').setAttribute('aria-label', lang === 'cs' ? 'Zur deutschen Version wechseln' : 'Přepnout na českou verzi');
  setText('#top-cta', t.topCta + ' ↘');
  $('#ticker-track').innerHTML = [...t.ticker, ...t.ticker].map(item => `<span>✳ <b>${item}</b></span>`).join('');
  setText('#hero-eyebrow', t.heroEyebrow);
  $('#hero-title').innerHTML = t.heroTitle.replaceAll('\n', '<br>');
  setText('#hero-lead', t.heroLead);
  setText('#hero-primary', t.heroPrimary);
  setText('#hero-secondary', t.heroSecondary);
  $('#hero-meta').innerHTML = t.heroMeta.map(([icon, label]) => `<span><b>${icon}</b>${label}</span>`).join('');
  setText('#hero-bottom-note', t.heroBottom);
  setText('#intro-index-label', t.introIndex);
  setText('#intro-title', t.introTitle);
  setText('#intro-text', t.introText);
  setText('#program-index-label', t.programIndex);
  setText('#program-title', t.programTitle);
  setText('#program-intro', t.programIntro);
  $('#day-flow').innerHTML = t.flow.map((item, i) => `<article class="flow-card"><span class="flow-number">0${i + 1} / 03</span><span class="flow-time">${item.time}</span><span class="flow-icon" aria-hidden="true">${item.icon}</span><h3>${item.title}</h3><p>${item.text}</p></article>`).join('');
  setText('#program-note', t.programNote);
  setText('#trips-index-label', t.tripsIndex);
  setText('#trips-title', t.tripsTitle);
  setText('#trips-intro', t.tripsIntro);
  $('#trip-grid').innerHTML = t.trips.map(([num, icon, title, description]) => `<article class="trip-card"><span class="trip-num">${t.tripLabel} / ${num}</span><span class="trip-symbol" aria-hidden="true">${icon}</span><h3>${title}</h3><p>${description}</p></article>`).join('');
  setText('#evenings-index-label', t.eveningsIndex);
  $('#evening-poster-title').innerHTML = t.posterTitle.replaceAll('\n', '<br>');
  setText('#evening-poster-subtitle', t.posterSubtitle);
  setText('#evenings-title', t.eveningsTitle);
  setText('#evenings-text', t.eveningsText);
  $('#evening-tags').innerHTML = t.eveningTags.map(tag => `<span class="evening-tag">${tag}</span>`).join('');
  setText('#play-index-label', t.playIndex);
  setText('#activity-title', t.activityTitle);
  setText('#activity-text', t.activityText);
  setText('#activity-button', t.activityButton);
  setText('#screen-title', t.screenTitle);
  setText('#screen-rec', t.screenRec);
  setText('#screen-footer', t.screenFooter);
  setText('.screen-word', t.screenInitial);
  setText('#activity-result', '');
  setText('#packing-index-label', t.packingIndex);
  setText('#packing-title', t.packingTitle);
  setText('#packing-text', t.packingText);
  $('#packing-list').innerHTML = t.packingItems.map((item, i) => `<label class="pack-item"><input type="checkbox" data-pack-index="${i}"><span>${item}</span></label>`).join('');
  setText('#reset-list', t.resetList);
  setText('#faq-index-label', t.faqIndex);
  setText('#faq-title', t.faqTitle);
  setText('#faq-intro', t.faqIntro);
  $('#faq-list').innerHTML = t.faq.map(([q, a], i) => `<article class="faq-item"><button class="faq-question" type="button" aria-expanded="false"><span>${q}</span><span aria-hidden="true">+</span></button><div class="faq-answer">${a}</div></article>`).join('');
  setText('#footer-text', t.footerText);
  setText('#back-top', t.backTop);
  $('#top-cta').setAttribute('href', '#plan');
  $('#main-nav').classList.remove('open');
  $('#menu-toggle').setAttribute('aria-expanded', 'false');
  $('#menu-toggle').setAttribute('aria-label', lang === 'cs' ? 'Otevřít menu' : 'Menü öffnen');
  document.title = lang === 'cs' ? "TANDEM '27 · Pernink" : "TANDEM '27 · Pernink";
  restorePacking();
}

function packingKey() { return `tandem27-packing-${currentLang}`; }
function getChecked() {
  try { return JSON.parse(localStorage.getItem(packingKey()) || '[]'); }
  catch { return []; }
}
function updatePackingProgress() {
  const t = content[currentLang];
  const checked = getChecked();
  setText('#packing-progress', t.progress(checked.length, t.packingItems.length));
}
function restorePacking() {
  const checked = getChecked();
  document.querySelectorAll('[data-pack-index]').forEach(input => {
    input.checked = checked.includes(Number(input.dataset.packIndex));
  });
  updatePackingProgress();
}

// Language selection on the opening screen.
document.querySelectorAll('[data-start-lang]').forEach(button => {
  button.addEventListener('click', () => renderLanguage(button.dataset.startLang));
});
$('#lang-switch').addEventListener('click', () => renderLanguage(currentLang === 'cs' ? 'de' : 'cs'));

// Mobile menu.
$('#menu-toggle').addEventListener('click', () => {
  const expanded = $('#menu-toggle').getAttribute('aria-expanded') === 'true';
  $('#menu-toggle').setAttribute('aria-expanded', String(!expanded));
  $('#main-nav').classList.toggle('open', !expanded);
});
$('#main-nav').addEventListener('click', event => {
  if (event.target.closest('a')) {
    $('#main-nav').classList.remove('open');
    $('#menu-toggle').setAttribute('aria-expanded', 'false');
  }
});

// Random summer activity.
$('#activity-button').addEventListener('click', () => {
  const t = content[currentLang];
  const activity = t.activities[Math.floor(Math.random() * t.activities.length)];
  setText('#activity-result', `✳ ${activity}`);
  $('.screen-word').textContent = currentLang === 'cs' ? 'JDEME!' : 'LOS GEHT’S!';
});

// Packing checklist, stored locally in the visitor's browser.
$('#packing-list').addEventListener('change', event => {
  if (!event.target.matches('[data-pack-index]')) return;
  const checked = [...document.querySelectorAll('[data-pack-index]:checked')].map(input => Number(input.dataset.packIndex));
  try { localStorage.setItem(packingKey(), JSON.stringify(checked)); } catch { /* checklist still works for this visit */ }
  updatePackingProgress();
});
$('#reset-list').addEventListener('click', () => {
  try { localStorage.removeItem(packingKey()); } catch { /* storage may be disabled */ }
  restorePacking();
});

// Accessible FAQ accordion.
$('#faq-list').addEventListener('click', event => {
  const button = event.target.closest('.faq-question');
  if (!button) return;
  const item = button.closest('.faq-item');
  const willOpen = !item.classList.contains('open');
  item.classList.toggle('open', willOpen);
  button.setAttribute('aria-expanded', String(willOpen));
  button.querySelector('span:last-child').textContent = willOpen ? '−' : '+';
});
