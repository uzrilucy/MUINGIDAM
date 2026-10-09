window.MUIN_GROUPS = [
  { key: 'orthodox', name: '정파 9문파', hanja: '正派九門派', count: 36, lead: '검과 계율, 사문의 이름을 걸고 사는 사람들. 같은 정파라도 무공의 결과 살림의 방식, 안고 있는 문제가 저마다 다르다.',
    factions: [
      { key: '소림', hanja: '少林', home: '숭산', uni: 'shaolin', emph: '권·봉, 단단한 기본기, 계율과 책임', base: '사찰 전답, 시주, 지역 구휼', issue: '전쟁 유품과 생존자의 증언을 어디까지 공개할지', note: '네 사람 모두 남성 출가자다. 출가자에게도 모든 관계가 열려 있으며, 계율은 지금의 신념과 생활 방식으로 다뤄진다.' },
      { key: '무당', hanja: '武當', home: '무당산', uni: 'wudang', emph: '검·장, 흐름과 균형, 수양', base: '전답, 약재, 향객과 지역 교류', issue: '중립적 치료와 무림맹의 군사 요구 사이의 갈등' },
      { key: '화산', hanja: '華山', home: '화산', uni: 'huashan', emph: '검술, 실전 운용, 제자 간 경쟁', base: '전답, 산하 상업, 호송 협력', issue: '서쪽 길목 방어와 후계 선발의 충돌' },
      { key: '종남', hanja: '終南', home: '종남산', uni: 'zhongnan', emph: '검과 호위, 장기적인 규율', base: '지주의 후원, 관중 상업과 호위', issue: '관부에 가까운 노선과 강호 자율의 충돌' },
      { key: '공동', hanja: '崆峒', home: '서역 동부', uni: 'kongtong', emph: '장·권, 좁은 지형의 연속 공격', base: '서역 중계 교역, 역참 호위', issue: '천라교의 통행 포섭과 경제적 의존' },
      { key: '곤륜', hanja: '崑崙', home: '곤륜', uni: 'kunlun', emph: '검, 험지 생존과 긴 수련', base: '산악 교역, 약재, 순례객 보호', issue: '흩어진 거점을 모두 지키기 어려움' },
      { key: '청성', hanja: '靑城', home: '청성', uni: 'qingcheng', emph: '검과 보법, 정보와 치밀한 대응', base: '서남 상업, 호위·중개', issue: '약재 거래의 의심이 제자들에게 번짐' },
      { key: '아미', hanja: '峨嵋', home: '아미', uni: 'emei', emph: '검·장, 수양·지역 보호', base: '사찰 전답, 시주, 여성들의 후원망', issue: '피난민 보호와 군사 참여의 부담', note: '여성 출가자 세 사람과 남성 재가 외무 협력자 한 사람.' },
      { key: '점창', hanja: '點蒼', home: '점창', uni: 'diancang', emph: '빠른 검, 협소한 길에서의 실전', base: '산악 교역, 길잡이와 호위', issue: '끊어진 남쪽 길의 복구와 내부 인력 부족' }
    ] },
  { key: 'beggars', name: '개방', hanja: '丐幇', count: 4, lead: '강호에서 가장 빠른 것은 경공이 아니라 개방의 소문이다.',
    factions: [ { key: '개방', hanja: '丐幇', home: '낙양 · 강호 순회', emph: '봉·권, 정보 전달과 지역 분타', base: '기부, 회원의 생업, 분타 협조', issue: '보고를 숨기는 분타, 그리고 민생과 무림맹의 요청 사이의 충돌' } ] },
  { key: 'clans', name: '오대세가', hanja: '五大世家', count: 20, lead: '땅과 혈연, 가문의 이름으로 강호에 뿌리내린 다섯 집안. 가족은 닮은 데가 있어도 각자 다른 얼굴로 산다.',
    factions: [
      { key: '남궁세가', hanja: '南宮世家', home: '금릉', uni: 'namgung', emph: '검술, 가문 위신과 공개적인 영향력', base: '강남 토지와 교역', issue: '후계자의 개인적 선택과 혼약·동맹' },
      { key: '사천당가', hanja: '四川唐家', home: '성도', uni: 'tang', emph: '암기·독·해독과 정밀 제작', base: '약재·제작품·의약 거래', issue: '도난된 독의 출처와 고객 명단 보호' },
      { key: '제갈세가', hanja: '諸葛世家', home: '회운장', uni: 'zhuge', emph: '진법·기관·계획·문서', base: '설계, 장원, 상업 자문', issue: '좋은 계획이 현장의 사람을 놓치는 문제', note: '진법은 지형·사람·시설을 다루는 기술이지 술법이 아니다.' },
      { key: '모용세가', hanja: '慕容世家', home: '강남', uni: 'murong', emph: '다양한 무공 연구와 대인 교섭', base: '장원, 교역 투자, 식객', issue: '타 문파의 무공 자료를 얻은 경위' },
      { key: '하북팽가', hanja: '河北彭家', home: '철마보', uni: 'peng', emph: '도법, 집단 호송과 정면 전투', base: '군수·말·호송·토지', issue: '왕조의 협조 요청과 가문의 손실' }
    ] },
  { key: 'alliance', name: '무림맹', hanja: '武林盟', count: 6, lead: '권한은 넓고, 손은 모자란 중재자들.',
    factions: [ { key: '무림맹', hanja: '武林盟', home: '낙양', uni: 'alliance', emph: '파견 협력, 공동 조사와 중재', base: '회원 분담금과 상단 후원', issue: '권한은 넓지만 집행 인력·예산·회원의 동의가 부족하다', note: '무림맹은 왕조의 정부가 아니다. 회원 문파에 요청·중재·제재를 할 수 있지만 회원의 자원을 조건 없이 쓸 수는 없다. 관부는 살인·탈세·불법 무장 이동에 따로 권한을 가지며, 맹의 조사와 부딪히기도 손잡기도 한다.' } ] },
  { key: 'unorthodox', name: '사파', hanja: '邪派', count: 14, lead: '거래와 생존의 길. 정파의 간판이 협을 보증하지 않듯, 사파 출신도 의리를 지킨다.',
    factions: [
      { key: '흑도 연합', hanja: '黑道聯合', home: '관중 · 하남 경계', emph: '보호비, 창고, 중개, 분쟁 해결', base: '구역의 상인과 창고권', issue: '두목들은 저마다의 이익으로 움직인다' },
      { key: '살수 조직', hanja: '殺手組織', home: '거점 비공개', emph: '의뢰와 중개, 원칙을 가진 살수들', base: '의뢰비와 중개망', issue: '쫓기는 이탈자. 천라교와는 지휘 계통이 다르다' },
      { key: '녹림', hanja: '綠林', home: '하북 산길', emph: '산채와 산길', base: '통행세, 산채의 살림', issue: '가난한 이들을 받아들이지만 길손에게 통행세를 거둔다. 곡식이 모자라 봄 통행세를 올렸다' },
      { key: '수적', hanja: '水賊', home: '청류항 상류', emph: '수채와 항로', base: '강의 안전을 팔고 화물을 잠시 맡아 준다', issue: '수운권을 둘러싼 다툼' }
    ] },
  { key: 'tianluo', name: '천라교', hanja: '天羅敎', count: 32, lead: '중원이 마교라 부르는 이들의 자칭. 천산 남쪽의 거점들과 서역 교역권을 기반으로 한다.', tianluo: true,
    factions: [ { key: '천라교', hanja: '天羅敎', home: '천산 남쪽 · 서역', unis: ['tianluo-leader', 'tianluo-guardian', 'tianluo-officer', 'tianluo-medic'], uniNames: ['교주', '호법', '일반 간부', '의약부'] } ] },
  { key: 'life', name: '생활 · 생업', hanja: '生業', count: 24, lead: '모든 객잔 주인이 은거 고수는 아니고, 모든 상인이 첩자도 아니다. 강호는 이들의 생업 위에서 굴러간다.',
    factions: [
      { key: '청하표국', hanja: '淸河鏢局', home: '청하진', uni: 'escort', emph: '호송과 표행', base: '호송 보수와 계약', issue: '서쪽으로 떠난 표행이 돌아오지 않았다' },
      { key: '상단', hanja: '商團', home: '청하진 · 청류항', emph: '수운, 곡물, 서역 교역, 감정과 수금', base: '교역과 운송', issue: '오르는 호송비와 막히는 서쪽 길' },
      { key: '백초곡', hanja: '百草谷', home: '청하진 · 서남', uni: 'baekcho', emph: '의술과 약초', base: '진료와 약재', issue: '돌아온 표사의 치료와 약재 수급' },
      { key: '장인', hanja: '匠人', home: '청하진', emph: '병기, 수레와 기관, 복식과 호송 장비', base: '주문 제작과 수리', issue: '평소와 다른 주문들' },
      { key: '청류객잔·주민', hanja: '淸流客棧', home: '청하진', emph: '객잔, 나루, 장터', base: '숙박과 생업', issue: '오래 머문 손님들의 방값과 마을의 생계' },
      { key: '관부', hanja: '官府', home: '청하진 · 서하관', unis: ['magistrate', 'constable', 'passguard'], uniNames: ['문관', '무관 · 포두·포쾌', '관문 수비군'], emph: '세금, 치안, 관문 수비', base: '왕조의 관직', issue: '실종 사건 수사와 맹의 조사 사이' }
    ] },
  { key: 'free', name: '독립', hanja: '獨立', count: 8, lead: '등 뒤에 조직이 없는 사람들. 대신 저마다 놓지 못한 실 한 가닥을 쥐고 있다.',
    factions: [
      { key: '낭인', hanja: '浪人', home: '강호 각지', emph: '호위와 중재, 생계형 비무', base: '의뢰', issue: '' },
      { key: '산인', hanja: '山人', home: '산과 폐사', emph: '기록과 지리, 떠도는 검', base: '', issue: '' },
      { key: '은거자', hanja: '隱居者', home: '산촌', emph: '전쟁 이후 물러난 사람들', base: '', issue: '' },
      { key: '탈문자', hanja: '脫門者', home: '떠돌이', emph: '사문의 추적을 받는 무인', base: '', issue: '' }
    ] }
];
