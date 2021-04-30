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
    glot.assign('sc2', { ja: '', en: ''});
    glot.assign('jab', { ja: '銀行系Sier入社', en: 'Join a Bank Sier Company'});
    glot.assign('jab2', { ja: '', en: ''});
    glot.assign('fir', { ja: '１プロジェクト目', en: 'First project'});
    glot.assign('fir1', { ja: '小規模Webシステム改訂案件参画', en: 'Participated in a small-scale Web system revision'});
    glot.assign('fir2', { ja: '', en: ''});
    glot.assign('sec', { ja: '２プロジェクト目', en: 'Second project'});
    glot.assign('sec1', { ja: '中規模Webシステム新規画面構築プロジェクト参画', en: 'Participation in new screen construction project for medium-scale Web system'});
    glot.assign('sec2', { ja: '', en: ''});
    glot.assign('jas', { ja: 'SES入社', en: 'Join a System Engineering Service Company'});
    glot.assign('jas2', { ja: '', en: ''});
    glot.assign('dbs', { ja: '某大手SIer会社派遣', en: 'Dispatch Big Sier Company'});
    glot.assign('dbs1', { ja: '2つの中規模システム改修案件にプログラマとして携わる', en: 'Engaged as a programmer in two medium-scale system renovation projects'});
    glot.assign('dbs2', { ja: '', en: ''});
    glot.assign('psy', { ja: '配送業者向け管理システム新規開発', en: 'Delivery company system System development'});
    glot.assign('psy1', { ja: '配送業者向け管理システムを新規で1から開発した', en: 'Developed a new management system for delivery companies from scratch'});
    glot.assign('psy2', { ja: '', en: ''});
    glot.assign('psys', { ja: '配送業者向け管理システム改修', en: 'Repair of management system for delivery companies'});
    glot.assign('psys1', { ja: '配送業者向け管理システムの改修(2回)', en: 'Repair of management system for delivery companies (two times)'});
    glot.assign('psys2', { ja: '', en: ''});
    glot.assign('voi', { ja: '工事現場向け点呼システムの新規構築', en: 'New construction of roll call system for construction sites'});
    glot.assign('voi1', { ja: '新規開発案件', en: 'New development project'});
    glot.assign('voi2', { ja: '', en: ''});
    glot.assign('contactbutton', { ja: 'お問い合わせ', en: 'Contact'});
    glot.assign('yourname', { ja: '氏名', en: 'Your Name'});
    glot.assign('email', { ja: 'メールアドレス', en: 'Email'});
    glot.assign('message', { ja: '要件', en: 'Message'});
    glot.assign('send', { ja: '送信', en: 'Send'});
    glot.assign('close', { ja: '閉じる', en: 'Close'});
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
