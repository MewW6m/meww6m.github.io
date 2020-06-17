document.addEventListener("DOMContentLoaded", function() {
    const glot = new Glottologist(); // setDefinitions
    const jal = document.getElementById("jal");
    const enl = document.getElementById("enl");
    const browslang = browserLanguage();
    
    glotassigns(glot); // setLanguageText
    
    jal.addEventListener("click", function(){ // setClickEvent
        renderJa(glot, jal, enl);
    });
    enl.addEventListener("click", function(){
        renderEn(glot, jal, enl);
    });
    
    if (browslang == "ja") { // setFirstRender
        renderJa(glot, jal, enl);
    } else { 
       renderEn(glot, jal, enl);
    }

});

function renderJa(glot, jal, enl){ // excuteRenderJapanese
    glot.render("ja");
    jal.style.color = "white";
    enl.style.color = "gray";
}
function renderEn(glot, jal, enl){ // excuteRenderEnglish
    glot.render("en");
    jal.style.color = "gray";
    enl.style.color = "white";
}

function glotassigns(glot){ // setLanguageText
    glot.assign('title', { ja: '私のポートフォリオ', en: 'My Portfolio Site'});
    glot.assign('togithub', { ja: 'Githubへ', en: 'GOTO GITHUB'});
    glot.assign('pftitle', { ja: '作品', en: 'Portfolios'});
    glot.assign('crtitle', { ja: '経歴', en: 'Career'});
    glot.assign('sktitle', { ja: '技術', en: 'Skill'});
    glot.assign('sktitle2', { ja: '欲しい技術', en: 'Will Skill'});
    glot.assign('code1', { ja: 'コード', en: 'Code'});
    glot.assign('doc1', { ja: 'ドキュメント', en: 'Document'});
    glot.assign('app1', { ja: 'アプリ', en: 'Application'});
    glot.assign('readmore', { ja: '詳細', en: 'Read more'});
    glot.assign('astronomy', { ja: '駒澤大学天文サークル旧HP', en: 'Komazawa University Astronomy Club HP'});
    glot.assign('hari', { ja: '鍼灸院ホームページ', en: 'Acupuncture HP'});
    glot.assign('mineso', { ja: 'MinesO(製作中)', en: 'MinesO (ComingSoon..)'});
    glot.assign('pgl', { ja: '言語', en: 'ProgrammingLanguage'});
    glot.assign('fw', { ja: 'フレームワーク', en: 'FrameWork'});
    glot.assign('sp', { ja: '工程', en: 'SystemProcess'});
    glot.assign('dev', { ja: 'ツール', en: 'DevTools'});
    glot.assign('thxsee', { ja: 'ご覧頂きありがとうございました', en: 'Thanks for visiting'});
    glot.assign('sc', { ja: '学生時代', en: 'School Days'});
    glot.assign('sc1', { ja: 'Webベンチャーでプログラマーアルバイト', en: 'Programmer part-time job at Web venture'});
    glot.assign('jab', { ja: '銀行系Sier入社', en: 'Join a Bank Sier Company'});
    glot.assign('fir', { ja: '１プロジェクト目', en: 'First project'});
    glot.assign('fir1', { ja: '小規模Webシステム改訂案件参画', en: 'Participated in a small-scale Web system revision'});
    glot.assign('sec', { ja: '２プロジェクト目', en: 'Second project'});
    glot.assign('sec1', { ja: '中規模Webシステム新規画面構築プロジェクト参画', en: 'Participation in new screen construction project for medium-scale Web system'});
    glot.assign('jas', { ja: 'SES入社', en: 'Join a System Engineering Service Company'});
    glot.assign('dbs', { ja: '某大手SIer会社派遣', en: 'Dispatch Big Sier Company'});
    glot.assign('dbs1', { ja: '2つの中規模システム改修案件にプログラマとして携わる', en: 'Engaged as a programmer in two medium-scale system renovation projects'});
}

var browserLanguage = function() {
    var ua = window.navigator.userAgent.toLowerCase();
    try {
      // chrome
      if( ua.indexOf( 'chrome' ) != -1 ){
        return ( navigator.languages[0] || navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
      }
      else{
        return ( navigator.browserLanguage || navigator.language || navigator.userLanguage).substr(0,2);
      }
    }
    catch( e ) {
      return "en";
    }
  }
