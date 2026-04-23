const stage1Questions = [
  { id: 'q1', title: '你最近的作息更接近？', options: [
    { label: '很规律，基本不熬夜', weights: { D1: 0 } },
    { label: '偶尔熬夜', weights: { D1: 1 } },
    { label: '经常熬夜', weights: { D1: 2 } },
    { label: '昼夜颠倒', weights: { D1: 3 } },
  ] },
  { id: 'q2', title: '你和烟的关系是？', options: [
    { label: '从不', weights: { D3: 0 } },
    { label: '偶尔尝试', weights: { D3: 1 } },
    { label: '经常抽', weights: { D3: 2 } },
    { label: '很多年了', weights: { D3: 3 } },
  ] },
  { id: 'q3', title: '你喝酒的频率？', options: [
    { label: '几乎不喝', weights: { D3: 0 } },
    { label: '偶尔社交', weights: { D3: 1 } },
    { label: '每周几次', weights: { D3: 2 } },
    { label: '基本每天', weights: { D3: 3 } },
  ] },
  { id: 'q4', title: '你的饮食更接近？', options: [
    { label: '清淡均衡', weights: { D2: 0 } },
    { label: '偶尔重口', weights: { D2: 1 } },
    { label: '外卖 / 重油盐较多', weights: { D2: 2 } },
    { label: '高油高盐 + 不规律', weights: { D2: 3 } },
  ] },
  { id: 'q5', title: '你上一次系统体检是？', options: [
    { label: '1年内', weights: { D4: 0 } },
    { label: '1-2年', weights: { D4: 1 } },
    { label: '很久以前', weights: { D4: 2 } },
    { label: '从未系统体检', weights: { D4: 3 } },
  ] },
  { id: 'q6', title: '你对“癌症早筛”的态度更接近？', options: [
    { label: '主动了解并考虑做', weights: { D4: 0 } },
    { label: '听说过但没行动', weights: { D4: 1 } },
    { label: '觉得还没必要', weights: { D4: 2 } },
    { label: '几乎没想过', weights: { D4: 3 } },
  ] },
  { id: 'q7', title: '你的日常压力状态？', options: [
    { label: '比较轻松', weights: { D1: 0, D5: 0 } },
    { label: '偶尔压力大', weights: { D1: 1, D5: 0 } },
    { label: '长期压力', weights: { D1: 2, D5: 0 } },
    { label: '经常焦虑 / 疲惫', weights: { D1: 3, D5: 1 } },
  ] },
  { id: 'q8', title: '你的运动习惯？', options: [
    { label: '每周规律运动', weights: { D2: 0 } },
    { label: '偶尔运动', weights: { D2: 1 } },
    { label: '很少运动', weights: { D2: 2 } },
    { label: '基本不动', weights: { D2: 3 } },
  ] },
  { id: 'q9', title: '你最近的身体状态更接近？', options: [
    { label: '没有明显不适', weights: { D5: 0 } },
    { label: '偶尔有些小问题', weights: { D5: 1 } },
    { label: '长期有些不适', weights: { D5: 2 } },
    { label: '已有慢性问题 / 疾病', weights: { D5: 3 } },
  ] },
  { id: 'q10', title: '家人中是否有癌症病史？', options: [
    { label: '没有', weights: { D6: 0 } },
    { label: '有远亲', weights: { D6: 1 } },
    { label: '有直系亲属', weights: { D6: 2 } },
    { label: '多位家人', weights: { D6: 3 } },
  ] },
];

const stage2BaseQuestions = [
  { id: 's2_age', title: '你的年龄范围？', type: 'single', options: [
    { label: '<30', value: 0 }, { label: '30-39', value: 1 }, { label: '40-49', value: 2 }, { label: '50-59', value: 3 }, { label: '60+', value: 4 },
  ] },
  { id: 's2_gender', title: '你的性别？', type: 'single', options: [
    { label: '男', value: 'male' }, { label: '女', value: 'female' },
  ] },
  { id: 's2_family_count', title: '直系亲属是否有人患癌？', type: 'single', options: [
    { label: '无', value: 0 }, { label: '有 1 人', value: 2 }, { label: '有 2 人及以上', value: 3 },
  ] },
  { id: 's2_family_type', title: '如果有，主要是哪类癌种？（可多选）', type: 'multi', options: [
    { label: '肺癌', value: 'lung' }, { label: '结直肠癌', value: 'colorectal' }, { label: '胃癌', value: 'gastric' }, { label: '肝癌', value: 'liver' },
    { label: '乳腺癌', value: 'breast' }, { label: '胰腺癌', value: 'pancreas' }, { label: '食管癌', value: 'esophagus' }, { label: '鼻咽癌', value: 'nasopharynx' },
    { label: '膀胱癌', value: 'bladder' }, { label: '前列腺癌', value: 'prostate' }, { label: '卵巢癌', value: 'ovary' }, { label: '宫颈癌 / 子宫体癌', value: 'femaleRepro' },
    { label: '肾癌', value: 'kidney' }, { label: '胆囊癌', value: 'gallbladder' }, { label: '淋巴瘤', value: 'lymphoma' },
  ] },
  { id: 's2_medical_history', title: '你是否有以下情况？（可多选）', type: 'multi', options: [
    { label: '慢性肝病 / 肝功能异常', value: 'liverHistory' }, { label: '胃病 / 幽门螺杆菌相关问题', value: 'gastricHistory' },
    { label: '肠息肉 / 肠道炎症', value: 'colonHistory' }, { label: '乳腺结节 / 乳腺异常随访', value: 'breastHistory' },
    { label: '妇科异常 / HPV相关问题', value: 'femaleReproHistory' }, { label: '无', value: 'none' },
  ] },
  { id: 's2_screening', title: '你过去是否做过相关筛查？', type: 'single', options: [
    { label: '定期做', value: -1 }, { label: '做过，但不规律', value: 0 }, { label: '从未做过', value: 1 },
  ] },
  { id: 's2_symptom_duration', title: '如果最近有不适，大概持续多久了？', type: 'single', options: [
    { label: '没有明显不适', value: 0 }, { label: '< 1个月', value: 1 }, { label: '1-3个月', value: 2 }, { label: '> 3个月', value: 3 },
  ] },
  { id: 's2_bmi', title: '你的体型更接近？', type: 'single', options: [
    { label: '正常', value: 0 }, { label: '超重', value: 1 }, { label: '肥胖', value: 2 },
  ] },
  { id: 's2_reflux_swallow', title: '你是否长期有反酸、烧心、吞咽不适？', type: 'single', options: [
    { label: '没有', value: 0 }, { label: '偶尔有', value: 1 }, { label: '经常有', value: 2 },
  ] },
  { id: 's2_urinary_issue', title: '你是否有长期尿频、尿血或泌尿异常？', type: 'single', options: [
    { label: '没有', value: 0 }, { label: '偶尔有', value: 1 }, { label: '经常有 / 已检查过', value: 2 },
  ] },
  { id: 's2_breast_issue', title: '你是否有乳腺异常、包块或长期随访情况？', type: 'single', options: [
    { label: '不适用 / 没有', value: 0 }, { label: '有过提示，但未持续随访', value: 1 }, { label: '有，且长期关注 / 复查', value: 2 },
  ] },
  { id: 's2_female_screening', title: '女性相关筛查情况（宫颈 / 妇科）更接近？', type: 'single', options: [
    { label: '不适用', value: -1 }, { label: '近1年做过', value: 0 }, { label: '做过，但不规律', value: 1 }, { label: '很久没做 / 从未做过', value: 2 },
  ] },
];

const stage2BranchQuestions = [
  { id: 's2_smoking_years', title: '你的吸烟年限大概是？', showIf: (d) => d.D3 >= 3, type: 'single', options: [
    { label: '无', value: 0 }, { label: '< 5年', value: 1 }, { label: '5-10年', value: 2 }, { label: '> 10年', value: 3 },
  ] },
  { id: 's2_diet_detail', title: '你更常见的是？（可多选）', showIf: (d) => d.D2 >= 3, type: 'multi', options: [
    { label: '高盐 / 腌制食品较多', value: 'highSalt' }, { label: '膳食纤维较少', value: 'lowFiber' }, { label: '都没有', value: 'none' },
  ] },
  { id: 's2_family_early', title: '家人中的相关癌症，是否有人在相对较早年龄被发现？', showIf: (d) => d.D6 >= 2, type: 'single', options: [
    { label: '不清楚 / 没有', value: 0 }, { label: '有 1 位', value: 1 }, { label: '有 2 位及以上', value: 2 },
  ] },
];

const organLabels = {
  lung: '肺部', colorectal: '肠道', gastric: '胃部', liver: '肝脏', breast: '乳腺', pancreas: '胰腺',
  esophagus: '食管', nasopharynx: '鼻咽', bladder: '膀胱', prostate: '前列腺', ovary: '卵巢',
  cervix: '宫颈', endometrium: '子宫体', kidney: '肾脏', gallbladder: '胆囊', lymphoma: '淋巴系统',
};

const actionMap = {
  lung: ['肺部筛查', '低剂量 CT（LDCT）', 200, 500],
  colorectal: ['肠道筛查', '肠镜 / 粪便检测', 500, 2000],
  gastric: ['胃部筛查', '胃镜 / 幽门螺杆菌检测', 300, 1500],
  liver: ['肝脏筛查', '肝脏超声 + AFP', 200, 600],
  breast: ['乳腺筛查', '乳腺超声 / 钼靶', 200, 800],
  pancreas: ['胰腺筛查', '腹部影像检查', 300, 1500],
  esophagus: ['食管筛查', '胃镜', 300, 1500],
  nasopharynx: ['鼻咽筛查', '耳鼻喉专科检查', 200, 800],
  bladder: ['膀胱筛查', '泌尿系统检查', 200, 800],
  prostate: ['前列腺筛查', 'PSA 检测', 100, 400],
  ovary: ['卵巢筛查', '妇科超声 / 肿瘤标志物', 300, 1200],
  cervix: ['宫颈筛查', 'TCT / HPV', 200, 600],
  endometrium: ['子宫体筛查', '妇科超声 / 专科检查', 300, 1000],
  kidney: ['肾脏筛查', '肾脏超声', 200, 500],
  gallbladder: ['胆囊筛查', '腹部超声', 100, 300],
  lymphoma: ['淋巴系统评估', '血液检查 / 专科检查', 200, 800],
};

const state = {
  screen: 'home',
  audienceChoice: null,
  planChoice: null,
  stage1Index: 0,
  stage2Index: 0,
  showAllRisks: false,
  consultIntent: '',
  consultSubmitted: false,
  userPhone: '',
  stage1Answers: {},
  stage2Answers: {},
};

const app = document.querySelector('#app');

function sumStage1() {
  const acc = { D1: 0, D2: 0, D3: 0, D4: 0, D5: 0, D6: 0 };
  stage1Questions.forEach((q) => {
    const idx = state.stage1Answers[q.id];
    if (idx === undefined) return;
    Object.entries(q.options[idx].weights).forEach(([k, v]) => {
      acc[k] = (acc[k] || 0) + v;
    });
  });
  return acc;
}

function getTags(dims) {
  const sorted = Object.entries(dims).sort((a, b) => b[1] - a[1]);
  const [mainKey, mainScore] = sorted[0] || [];
  const map = {
    D1: mainScore >= 5 ? '拿命换效率型' : '报复性作息型',
    D2: mainScore >= 5 ? '久坐成佛型' : '快乐碳水型',
    D3: mainScore >= 5 ? '重口生存型' : '人间烟火型',
    D4: dims.D4 <= 1 ? '养生冲刺型' : '没事型选手',
    D5: mainScore >= 3 ? '健康盲盒型' : '提前焦虑型',
    D6: mainScore >= 3 ? '被点名型选手' : '提前焦虑型',
  };
  return { main: map[mainKey] || '没事型选手' };
}

function getStage1Summary(tag) {
  return {
    拿命换效率型: '今晚再熬一次，明天就早睡（第100次）',
    报复性作息型: '白天不够活，晚上拼命补。',
    久坐成佛型: '能坐着绝不站，能躺着绝不动。',
    快乐碳水型: '今天吃点好的，明天再说健康。',
    重口生存型: '生活可以苦，但烟酒不能少。',
    人间烟火型: '有些风险，其实每天都在接触。',
    没事型选手: '感觉挺好的，不代表真的没有风险。',
    养生冲刺型: '你已经比很多人更在意健康了。',
    健康盲盒型: '不开不知道，一开可能吓一跳。',
    提前焦虑型: '还没出事，但已经开始担心。',
    被点名型选手: '有些风险，不完全由你自己决定。',
  }[tag] || '你的结果有点意思，也值得认真看一眼。';
}

function getParentStage1Insight(dims) {
  const sorted = Object.entries(dims).sort((a, b) => b[1] - a[1]);
  const [topKey, topScore] = sorted[0] || [];
  const high = topScore >= 3;
  const map = {
    D1: {
      title: high ? '作息和压力上有些需要留意' : '作息和压力情况需要再确认',
      summary: '你提到的作息、压力或疲惫状态，可能会影响爸妈对身体信号的感知，也容易让一些问题被拖延处理。',
    },
    D2: {
      title: high ? '生活习惯里有些风险点' : '饮食运动情况需要再确认',
      summary: '你提到的饮食和运动情况里，可能有一些会慢慢增加健康风险的因素，适合继续补充关键信息。',
    },
    D3: {
      title: high ? '烟酒相关风险点比较明显' : '烟酒情况需要再确认',
      summary: '你提到的烟酒相关情况，会让部分癌种方向更值得被优先看清楚，后续需要结合年龄和既往检查一起判断。',
    },
    D4: {
      title: dims.D4 <= 1 ? '健康管理意识相对较好' : '系统筛查缺口需要关注',
      summary: dims.D4 <= 1
        ? '从你目前填写的信息看，爸妈并不是完全缺少健康管理意识，下一步更适合把筛查方向具体化。'
        : '你提到爸妈在体检或早筛上可能有一段空窗期，这类信息空白本身就会增加后续决策难度。',
    },
    D5: {
      title: high ? '身体已经有些信号需要确认' : '身体状态仍需要补充判断',
      summary: '你观察到的身体状态信息，暂时还不足以判断风险高低，但已经值得继续做完整评估。',
    },
    D6: {
      title: high ? '家族因素值得认真看一眼' : '家族相关信息需要再确认',
      summary: '家族因素不代表爸妈一定有问题，但它确实会让筛查决策更适合提前、系统地推进。',
    },
  };

  return map[topKey] || {
    title: '需要进一步补充关键信息',
    summary: '目前只能看到一些初步线索，还不能判断爸妈真正更需要关注哪些方向。',
  };
}

function getStage1Feedback(dims) {
  const tags = getTags(dims);
  if (!isParent()) {
    if (state.stage1Index < 2) return '先快速测几题，看看你的风险画像正在往哪一类靠近。';
    if (state.stage1Index < 5) return `你目前更接近「${tags.main}」`;
    return `你当前属于「${tags.main}」倾向，继续完成可解锁完整报告。`;
  }

  if (state.stage1Index < 2) return '先收集几个基础信息，看看爸妈有哪些方向值得继续确认。';
  if (state.stage1Index < 5) return '正在补充生活习惯和烟酒相关信息，初步线索会逐渐变清楚。';
  if (state.stage1Index < 8) return '现在已经能看到一些习惯和健康管理线索，还需要继续确认身体状态。';
  return '快完成阶段一了，接下来会把这些观察转成更具体的筛查判断。';
}

function stage2Questions() {
  const dims = sumStage1();
  return [...stage2BaseQuestions, ...stage2BranchQuestions.filter((q) => q.showIf(dims))];
}

function num(id, fallback = 0) {
  const value = state.stage2Answers[id] ?? fallback;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

function arr(id) {
  return Array.isArray(state.stage2Answers[id]) ? state.stage2Answers[id] : [];
}

function computeCancerRisk() {
  const dims = sumStage1();
  const age = num('s2_age');
  const gender = state.stage2Answers.s2_gender || 'male';
  const familyCount = num('s2_family_count');
  const familyTypes = arr('s2_family_type');
  const medical = arr('s2_medical_history');
  const screening = num('s2_screening');
  const symptom = num('s2_symptom_duration');
  const bmi = num('s2_bmi');
  const smokingYears = num('s2_smoking_years');
  const dietDetail = arr('s2_diet_detail');
  const familyEarly = num('s2_family_early');
  const refluxSwallow = num('s2_reflux_swallow');
  const urinaryIssue = num('s2_urinary_issue');
  const breastIssue = num('s2_breast_issue');
  const femaleScreening = num('s2_female_screening');

  const maleFactor = gender === 'male' ? 1 : 0;
  const femaleFactor = gender === 'female' ? 1 : 0;
  const unknownGenderFactor = gender !== 'male' && gender !== 'female' ? 0.5 : 0;

  let lung = 0.5 * dims.D3 + 0.2 * dims.D1 + 0.1 * dims.D5 + 0.2 * dims.D6 + age + familyCount + screening + smokingYears * 0.8 + symptom * 0.2 + maleFactor * 0.5;
  let colorectal = 0.4 * dims.D2 + 0.2 * dims.D1 + 0.2 * dims.D5 + 0.2 * dims.D6 + age + familyCount + screening + symptom * 0.4 + bmi * 0.5;
  let gastric = 0.4 * dims.D2 + 0.3 * dims.D5 + 0.3 * dims.D6 + age + familyCount + screening + symptom * 0.6;
  let liver = 0.5 * dims.D3 + 0.2 * dims.D2 + 0.3 * dims.D5 + age + screening + symptom * 0.5 + bmi * 0.4 + maleFactor * 0.5;
  let breast = 0.3 * dims.D2 + 0.2 * dims.D5 + 0.2 * dims.D6 + age + bmi * 0.6 + femaleFactor * 1 - maleFactor * 1 + breastIssue * 1.4;
  let pancreas = 0.4 * dims.D3 + 0.2 * dims.D5 + 0.2 * dims.D2 + age + symptom * 0.6;
  let esophagus = 0.5 * dims.D3 + 0.3 * dims.D2 + age + symptom * 0.4 + refluxSwallow * 1.4;
  let nasopharynx = 0.3 * dims.D6 + 0.2 * dims.D3 + age + symptom * 0.3;
  let bladder = 0.6 * dims.D3 + age + symptom * 0.3 + urinaryIssue * 1.5;
  let prostate = age * 1.2 + maleFactor * 1 - femaleFactor * 2 + unknownGenderFactor * 0.2 + 0.3 * dims.D6 + urinaryIssue * 0.7;
  let ovary = age + femaleFactor * 1 - maleFactor * 2 + unknownGenderFactor * 0.2 + 0.4 * dims.D6 + Math.max(femaleScreening, 0) * 0.5;
  let cervix = age + femaleFactor * 1 - maleFactor * 2 + unknownGenderFactor * 0.2 + screening + 0.3 * dims.D5 + Math.max(femaleScreening, 0) * 1.2;
  let endometrium = age + bmi * 0.7 + femaleFactor * 1 - maleFactor * 2 + unknownGenderFactor * 0.2 + Math.max(femaleScreening, 0) * 0.8;
  let kidney = age + bmi * 0.5 + 0.2 * dims.D3 + urinaryIssue * 0.8;
  let gallbladder = age + 0.3 * dims.D2 + 0.3 * dims.D5;
  let lymphoma = age + 0.3 * dims.D5 + 0.2 * dims.D6;

  if (familyTypes.includes('lung')) lung += 1;
  if (familyTypes.includes('colorectal')) colorectal += 1;
  if (familyTypes.includes('gastric')) gastric += 1;
  if (familyTypes.includes('liver')) liver += 1;
  if (familyTypes.includes('breast')) breast += 1;
  if (familyTypes.includes('pancreas')) pancreas += 1;
  if (familyTypes.includes('esophagus')) esophagus += 1;
  if (familyTypes.includes('nasopharynx')) nasopharynx += 1;
  if (familyTypes.includes('bladder')) bladder += 1;
  if (familyTypes.includes('prostate')) prostate += 1;
  if (familyTypes.includes('ovary')) ovary += 1;
  if (familyTypes.includes('femaleRepro')) { cervix += 1; endometrium += 1; }
  if (familyTypes.includes('kidney')) kidney += 1;
  if (familyTypes.includes('gallbladder')) gallbladder += 1;
  if (familyTypes.includes('lymphoma')) lymphoma += 1;

  if (medical.includes('liverHistory')) liver += 3;
  if (medical.includes('gastricHistory')) gastric += 2;
  if (medical.includes('colonHistory')) colorectal += 3;
  if (medical.includes('breastHistory')) breast += 2;
  if (medical.includes('femaleReproHistory')) { cervix += 2; endometrium += 1.5; ovary += 1; }
  if (dietDetail.includes('highSalt')) gastric += 2;
  if (dietDetail.includes('lowFiber')) colorectal += 2;
  if (dims.D6 >= 2) {
    lung += 0.5;
    colorectal += 0.5;
    gastric += 0.5;
    liver += 0.5;
    breast += 0.4;
    pancreas += 0.3;
    esophagus += 0.3;
    nasopharynx += 0.3;
    bladder += 0.2;
    prostate += 0.4;
    ovary += 0.4;
    cervix += 0.2;
    endometrium += 0.2;
    kidney += 0.2;
    gallbladder += 0.2;
    lymphoma += 0.4;
  }
  if (familyEarly >= 1) {
    lung += 0.3 * familyEarly;
    colorectal += 0.3 * familyEarly;
    gastric += 0.3 * familyEarly;
    liver += 0.3 * familyEarly;
  }
  if (dims.D3 >= 5) lung = Math.max(lung, 5.5);

  return { lung, colorectal, gastric, liver, breast, pancreas, esophagus, nasopharynx, bladder, prostate, ovary, cervix, endometrium, kidney, gallbladder, lymphoma };
}

function level(score) {
  if (score >= 8) return '高';
  if (score >= 4.5) return '中';
  return '低';
}

function riskText(organ, score) {
  const lv = level(score);
  const prefix = `${organLabels[organ]}相关风险`;
  if (lv === '高') return `${prefix}值得优先关注，建议尽快进一步确认。`;
  if (lv === '中') return `${prefix}有一定上升，建议开始规划筛查。`;
  return `${prefix}当前相对较低，但仍建议定期关注。`;
}

function sortedRisks() {
  return Object.entries(computeCancerRisk()).sort((a, b) => b[1] - a[1]);
}

function traditionalList(limit = 5) {
  return sortedRisks().slice(0, limit).map(([organ, score], index) => {
    const [title, action, minCost, maxCost] = actionMap[organ];
    const lv = level(score);
    return {
      organ, score, title, action, minCost, maxCost, rank: index + 1, level: lv,
      urgency: lv === '高' ? '建议 12 个月内完成' : lv === '中' ? '建议 1-2 年内规划' : '建议日常关注',
    };
  });
}

function progress(current, total) {
  const pct = Math.round((current / total) * 100);
  return `<div><div class="progress-top"><span>进度</span><span>${pct}%</span></div><div class="bar"><span style="width:${pct}%"></span></div></div>`;
}

function isParent() {
  return state.audienceChoice === 'parent';
}

function getQuestionTitle(question) {
  if (!isParent()) return question.title;

  const titleMap = {
    q1: '你了解爸妈最近的作息更接近哪种状态？',
    q2: '你了解爸妈和烟的关系更接近哪种？',
    q3: '你了解爸妈喝酒的频率更接近哪种？',
    q4: '爸妈平时的饮食习惯更接近哪种？',
    q5: '爸妈上一次系统体检大概是什么时候？',
    q6: '你对“帮爸妈做癌症早筛”这件事的态度更接近？',
    q7: '你感觉爸妈最近的压力和疲惫状态更接近哪种？',
    q8: '爸妈平时的运动习惯更接近哪种？',
    q9: '你观察到爸妈最近的身体状态更接近哪种？',
    q10: '家里是否有癌症病史，会让你更担心爸妈的情况？',
    s2_age: '爸妈当前的年龄范围更接近？',
    s2_gender: '这次主要在评估爸爸还是妈妈？',
    s2_family_count: '你了解爸妈的直系亲属中，是否有人患癌？',
    s2_family_type: '如果有，主要是哪类癌种？（按你了解可多选）',
    s2_medical_history: '你了解爸妈是否有以下情况？（可多选）',
    s2_screening: '爸妈过去是否做过相关筛查？',
    s2_symptom_duration: '如果爸妈最近有不适，大概持续多久了？',
    s2_bmi: '爸妈的体型更接近？',
    s2_reflux_swallow: '你有没有注意到爸妈长期有反酸、烧心、吞咽不适？',
    s2_urinary_issue: '你有没有注意到爸妈长期有尿频、尿血或泌尿异常？',
    s2_breast_issue: '你有没有注意到妈妈有乳腺异常、包块或长期随访情况？',
    s2_female_screening: '妈妈相关筛查情况（宫颈 / 妇科）更接近？',
    s2_smoking_years: '按你了解，爸妈的吸烟年限大概是？',
    s2_diet_detail: '按你了解，爸妈更常见的是？（可多选）',
    s2_family_early: '家人中的相关癌症，是否有人在相对较早年龄被发现？',
  };

  return titleMap[question.id] || question.title;
}

function getOptionLabel(questionId, label) {
  if (!isParent()) return label;

  const optionMap = {
    q1: {
      '昼夜颠倒': '昼夜颠倒 / 作息很乱',
    },
    q2: {
      '从不': '基本不抽',
      '偶尔尝试': '偶尔会抽',
      '很多年了': '抽了很多年',
    },
    q3: {
      '偶尔社交': '偶尔喝一点',
      '每周几次': '每周会喝几次',
      '基本每天': '基本每天都喝',
    },
    q5: {
      '1年内': '1年内做过',
      '1-2年': '1-2年内做过',
      '很久以前': '很久以前做过',
      '从未系统体检': '几乎没系统体检过',
    },
    q6: {
      '主动了解并考虑做': '主动了解过，也考虑帮他们做',
      '听说过但没行动': '听说过，但还没行动',
      '觉得还没必要': '觉得暂时还没必要',
      '几乎没想过': '之前几乎没认真想过',
    },
    q9: {
      '偶尔有些小问题': '偶尔会有些小问题',
      '已有慢性问题 / 疾病': '已有慢性问题 / 基础病',
    },
    s2_gender: {
      '男': '爸爸',
      '女': '妈妈',
    },
    s2_medical_history: {
      '无': '没有 / 不清楚',
    },
    s2_screening: {
      '从未做过': '从未系统做过',
    },
    s2_breast_issue: {
      '不适用 / 没有': '不适用 / 没有明显情况',
    },
    s2_female_screening: {
      '不适用': '不适用 / 主要在评估爸爸',
    },
  };

  return optionMap[questionId]?.[label] || label;
}

function getQuestionOptions(question) {
  if (!isParent() || question.id.startsWith('q')) return question.options;

  const unknownSingleIds = new Set([
    's2_family_count',
    's2_screening',
    's2_symptom_duration',
    's2_bmi',
    's2_reflux_swallow',
    's2_urinary_issue',
    's2_breast_issue',
    's2_female_screening',
    's2_smoking_years',
    's2_family_early',
  ]);
  const unknownMultiIds = new Set([
    's2_family_type',
    's2_medical_history',
    's2_diet_detail',
  ]);

  if (unknownSingleIds.has(question.id)) {
    return [...question.options, { label: '不清楚', value: 'unknown' }];
  }
  if (unknownMultiIds.has(question.id)) {
    return [...question.options, { label: '不清楚', value: 'unknown' }];
  }
  return question.options;
}

function unknownAnswerCount() {
  if (!isParent()) return 0;
  return Object.values(state.stage2Answers).reduce((count, value) => {
    if (value === 'unknown') return count + 1;
    if (Array.isArray(value) && value.includes('unknown')) return count + 1;
    return count;
  }, 0);
}

function renderHome() {
  return `
    <section class="home-hero">
      <div class="hero-topline">
        <span>多癌种风险初筛 Demo</span>
        <span>约 2 分钟</span>
      </div>
      <h1>先看清：你或爸妈更该优先查哪个方向</h1>
      <div class="friend-note">
        <div>朋友，你有多久没认真看过自己的癌症风险了？确认暂时没什么明显风险，心里也会更踏实一点。</div>
        <div>如果是帮爸妈看，也不用一上来就安排一堆检查。先把风险方向和不确定信息理清楚，反而更少折腾。</div>
      </div>
      <p class="home-lead">不是诊断，也不是吓唬人。用一组轻量问题，把生活习惯、家族因素、身体信号和筛查空白，转成更清楚的下一步建议。</p>
      <p class="home-sublead">泛泛体检不一定越多越好。更合理的是：没必要时不硬筛，有必要时先看清该重点查什么。</p>
      <div class="promise-grid">
        <div><strong>16 类方向</strong><br><span>肺、肠、胃、肝等</span></div>
        <div><strong>高/中/低提示</strong><br><span>先知道该关注哪里</span></div>
        <div><strong>路径建议</strong><br><span>传统筛查 or 整体评估</span></div>
      </div>
    </section>
    <section class="card home-start">
      <p class="section-title">先选一个场景</p>
      <div class="home-options">
        <button class="home-option" data-action="audience" data-value="self">
          <span class="option-icon">我</span>
          <span><strong>我自己测</strong><br><em>看看当前更值得优先关注的癌种方向，以及下一步怎么查。</em></span>
        </button>
        <button class="home-option featured" data-action="audience" data-value="parent">
          <span class="option-icon">爸妈</span>
          <span><strong>帮爸妈测</strong><br><em>信息不确定也可以填，先判断怎样少折腾地把风险看清楚。</em></span>
        </button>
      </div>
      <div class="home-note">不需要身份证或手机号 · 当前 DEMO 不会真实提交信息 · 不替代医学建议</div>
    </section>
  `;
}

function renderStage1() {
  const q = stage1Questions[state.stage1Index];
  const dims = sumStage1();
  const feedback = getStage1Feedback(dims);
  return `
    <section class="card">
      ${progress(state.stage1Index + 1, stage1Questions.length)}
      <div class="notice" style="margin-top:16px">${feedback}</div>
      <h2 style="margin-top:18px">${getQuestionTitle(q)}</h2>
      <div class="options">
        ${q.options.map((opt, idx) => `<button class="choice ${state.stage1Answers[q.id] === idx ? 'active' : ''}" data-action="stage1-answer" data-value="${idx}">${getOptionLabel(q.id, opt.label)}</button>`).join('')}
      </div>
      <div class="actions single">
        <button class="btn" data-action="stage1-prev">上一题</button>
      </div>
    </section>
  `;
}

function renderStage1Result() {
  const dims = sumStage1();
  const tags = getTags(dims);
  const parentInsight = getParentStage1Insight(dims);
  return `
    <section class="card">
      <p class="muted">${isParent() ? '爸妈的阶段一初步观察' : '你的阶段一标签'}</p>
      <h1>${isParent() ? parentInsight.title : tags.main}</h1>
      <div class="notice" style="margin-top:18px">${isParent() ? parentInsight.summary : `“${getStage1Summary(tags.main)}”`}</div>
      <div class="notice amber" style="margin-top:14px">${isParent() ? '当前只是一组基于你观察到的信息形成的初步线索，还不能代表爸妈真实的癌症风险水平。' : '当前只是一个轻量标签结果。这个标签更偏“行为画像”，并不能真正反映你的癌症风险情况。'}</div>
      <div class="notice" style="margin-top:14px">${isParent() ? '继续完成完整评估后，可以更清楚地看到：爸妈哪些癌种方向更值得优先关注、哪些信息还不确定，以及更适合传统逐项筛查还是先做整体评估。' : '完成完整评估，你会得到：哪些癌种方向更值得优先关注、风险高/中/低分布，以及应该先查哪个。'}</div>
      <button class="btn primary" style="width:100%;margin-top:18px" data-action="go-stage2">${isParent() ? '继续帮爸妈完成完整评估（建议）' : '继续完成完整评估（建议）'}</button>
    </section>
  `;
}

function renderStage2() {
  const questions = stage2Questions();
  const q = questions[state.stage2Index];
  const options = getQuestionOptions(q);
  const selected = state.stage2Answers[q.id];
  return `
    <section class="card">
      ${progress(state.stage2Index + 1, questions.length)}
      <div class="notice blue" style="margin-top:16px">第二阶段用于提升风险判断的准确性。你也可以中途退出，但结果参考性会更有限。</div>
      <h2 style="margin-top:18px">${getQuestionTitle(q)}</h2>
      <div class="options">
        ${options.map((opt) => {
          const active = q.type === 'multi' ? (Array.isArray(selected) && selected.includes(opt.value)) : selected === opt.value;
          return `<button class="choice ${q.type === 'multi' ? 'blue' : ''} ${active ? 'active' : ''}" data-action="${q.type === 'multi' ? 'multi-answer' : 'stage2-answer'}" data-value="${opt.value}">${getOptionLabel(q.id, opt.label)}</button>`;
        }).join('')}
        ${q.type === 'multi' ? `<button class="skip-choice ${Array.isArray(selected) && selected.length === 0 ? 'active' : ''}" data-action="multi-skip">都没有 / 跳过</button>` : ''}
      </div>
      ${q.type === 'multi'
        ? `<div class="actions">
            <button class="btn" data-action="stage2-prev">上一题</button>
            <button class="btn primary" data-action="stage2-next">下一题</button>
          </div>`
        : `<div class="actions single">
            <button class="btn" data-action="stage2-prev">上一题</button>
          </div>`}
    </section>
  `;
}

function renderFinal() {
  const risks = sortedRisks();
  const visible = state.showAllRisks ? risks : risks.slice(0, 3);
  const highCount = risks.filter(([, score]) => level(score) === '高').length;
  const mediumCount = risks.filter(([, score]) => level(score) === '中').length;
  const hasElevatedRisk = highCount > 0 || mediumCount > 0;
  const top = risks[0];
  const recs = traditionalList(5);
  const mcedComp = mcedComparisonSummary();
  const urgency = urgencyNudgeSummary(risks);
  const unknownCount = unknownAnswerCount();
  const ageFactor = num('s2_age');
  const decisionUncertain = highCount >= 2 || mediumCount >= 3 || (isParent() && unknownCount >= 2 && ageFactor >= 2);
  const otherNames = risks.slice(1, 3).map(([organ]) => organLabels[organ]).join('、');
  if (!hasElevatedRisk) return renderLowRiskFinal(risks, visible);

  return `
    <section class="card">
      <p class="muted">${isParent() ? '你帮爸妈测出来的完整结果' : '你的完整结果'}</p>
      <h2>当前有 ${highCount} 个方向风险偏高${mediumCount ? `，另有 ${mediumCount} 个方向处于中风险` : ''}</h2>
      <div class="stack" style="margin-top:16px">
        ${visible.map(([organ, score]) => {
          const lv = level(score);
          return `<div class="risk-card">
            <div class="risk-head"><span>${organLabels[organ]}风险</span><span class="pill ${lv === '高' ? 'high' : lv === '中' ? 'medium' : ''}">${lv} · ${score.toFixed(1)}</span></div>
            <p class="body" style="margin-top:8px">${riskText(organ, score)}</p>
            <p class="muted" style="margin-top:8px">${lv === '高' ? '建议 12 个月内完成' : lv === '中' ? '建议 1-2 年内规划' : '建议日常关注'} · ${actionMap[organ][1]}</p>
          </div>`;
        }).join('')}
      </div>
      ${risks.length > 3 ? `<button class="btn" style="width:100%;margin-top:14px" data-action="toggle-risks">${state.showAllRisks ? '收起其余风险方向' : '展开查看全部 16 个方向'}</button>` : ''}
    </section>

    <section class="card">
      <p class="muted">${isParent() ? '你现在在帮爸妈做决策' : '你的当前状态'}</p>
      <h2>${decisionUncertain ? (isParent() ? '更适合优先考虑少折腾、少跑医院的方式' : '更适合先做整体评估') : '筛查方向相对明确'}</h2>
      <p class="body" style="margin-top:12px">除了${organLabels[top[0]]}，${otherNames || '其他方向'}也有一定风险。很多人真正卡住的不是知不知道要筛查，而是不确定该先查哪个。${unknownCount ? `你还有 ${unknownCount} 个关键信息暂时不清楚，这种“不确定”本身也会增加决策难度。` : ''}</p>
      <div class="notice amber" style="margin-top:14px">${decisionUncertain ? '在这种状态下，多癌种早筛（整体评估）通常是更容易迈出第一步的方式。' : '如果方向已经比较明确，也可以优先按传统筛查路径做最关键的一项。'}</div>
      <div class="notice blue" style="margin-top:14px">
        <strong>如果选择多癌筛查（DNA甲基化），这笔账大概是：</strong><br>
        相比按传统路径分别安排 ${mcedComp.labels.join(' / ')} 等方向筛查，整体评估通常只需线下 1 次采血。<br>
        预计少跑医院 ${mcedComp.savedVisitsText}，少掉 ${mcedComp.decisionText}，时间上少消耗 ${mcedComp.timeText}。${mcedComp.moneyText}
      </div>
      <div class="split" style="margin-top:12px">
        <div class="mini">
          <strong>传统路径</strong><br>
          约 ${mcedComp.tradVisitsText} 次就诊 / 检查<br>
          约 ${mcedComp.minCost}-${mcedComp.maxCost} 元<br>
          需要逐项判断先后顺序
        </div>
        <div class="mini blue">
          <strong>多癌筛查</strong><br>
          约 1 次线下采血<br>
          约 3000 元，医保不可报<br>
          先拿到整体风险线索
        </div>
      </div>
      <div class="actions">
        <button class="btn" data-action="choose-plan" data-value="traditional">${isParent() ? '按传统方式给爸妈看' : '按传统筛查看'}</button>
        <button class="btn primary" data-action="choose-plan" data-value="mced">${isParent() ? '帮爸妈少折腾地评估' : '先整体评估'}</button>
      </div>
    </section>

    <section class="card urgency">
      <p class="muted">${isParent() ? '为什么不建议继续拖着？' : '为什么建议尽快把不确定性排除？'}</p>
      <h2>${urgency.title}</h2>
      <p class="body" style="margin-top:12px">${urgency.opening}</p>
      <div class="stack" style="margin-top:14px">
        ${urgency.items.map((item) => `<div class="mini warn">${item}</div>`).join('')}
      </div>
      <div class="notice amber" style="margin-top:14px">${urgency.close}</div>
    </section>

    <section class="card">
      <p class="muted">如果按传统筛查开始</p>
      <h2>先做：${recs[0]?.title || '基础筛查'}</h2>
      <p class="body" style="margin-top:10px">先把最明确的方向确认，再决定下一步。</p>
      <button class="btn" style="width:100%;margin-top:14px" data-action="go-consult">帮我细化筛查顺序</button>
    </section>

    <div class="actions">
      <button class="btn" data-action="reset">重新测试</button>
      <button class="btn primary" data-action="go-landing">查看映射</button>
    </div>
  `;
}

function renderLowRiskFinal(risks, visible) {
  return `
    <section class="card">
      <p class="muted">${isParent() ? '你帮爸妈测出来的完整结果' : '你的完整结果'}</p>
      <h2>当前没有明显中高风险方向</h2>
      <p class="body" style="margin-top:12px">${isParent() ? '从目前填写的信息看，爸妈暂时没有明显需要被优先推进的癌症筛查方向。' : '从目前填写的信息看，你暂时没有明显需要被优先推进的癌症筛查方向。'}</p>
      <div class="stack" style="margin-top:16px">
        ${visible.map(([organ, score]) => `<div class="risk-card">
          <div class="risk-head"><span>${organLabels[organ]}风险</span><span class="pill">低 · ${score.toFixed(1)}</span></div>
          <p class="body" style="margin-top:8px">${riskText(organ, score)}</p>
        </div>`).join('')}
      </div>
      ${risks.length > 3 ? `<button class="btn" style="width:100%;margin-top:14px" data-action="toggle-risks">${state.showAllRisks ? '收起其余风险方向' : '展开查看全部 16 个方向'}</button>` : ''}
    </section>

    <section class="card calm">
      <p class="muted">${isParent() ? '这次更适合的建议' : '这次更适合你的建议'}</p>
      <h2>${isParent() ? '暂时不用急着安排癌症筛查' : '暂时不用急着做癌症筛查'}</h2>
      <p class="body" style="margin-top:12px">${isParent() ? '如果爸妈没有持续不适、明显家族高危因素或医生特别建议，现在更重要的是把日常状态维持好，而不是为了筛查而筛查。' : '如果你没有持续不适、明显家族高危因素或医生特别建议，现在更重要的是把日常状态维持好，而不是为了筛查而筛查。'}</p>
      <div class="stack" style="margin-top:14px">
        <div class="mini good">保持规律作息，别长期透支身体。</div>
        <div class="mini good">吃得均衡一点，动得稳定一点，别让压力一直憋着。</div>
        <div class="mini good">${isParent() ? '多给爸妈一点陪伴和关注，比立刻安排一堆检查更重要。' : '保持好心情，也继续保留对自己的爱和照顾。'}</div>
      </div>
      <div class="notice" style="margin-top:14px">${isParent() ? '如果之后出现持续不适、体重明显变化、异常出血、长期咳嗽等情况，再及时就医确认。' : '如果之后出现持续不适、体重明显变化、异常出血、长期咳嗽等情况，再及时就医确认。'}</div>
    </section>

    <div class="actions">
      <button class="btn" data-action="reset">重新测试</button>
      <button class="btn primary" data-action="go-landing">查看映射</button>
    </div>
  `;
}

function comparisonSummary() {
  const high = sortedRisks().filter(([, score]) => level(score) === '高');
  const selected = high.length ? high : sortedRisks().slice(0, 2);
  return selected.reduce((acc, [organ]) => {
    acc.labels.push(organLabels[organ]);
    acc.min += actionMap[organ][2];
    acc.max += actionMap[organ][3];
    acc.count += 1;
    return acc;
  }, { labels: [], min: 0, max: 0, count: 0 });
}

function mcedComparisonSummary() {
  const risks = sortedRisks();
  const highAndMedium = risks.filter(([, score]) => level(score) !== '低');
  const selected = highAndMedium.length ? highAndMedium : risks.slice(0, 2);
  const visitMap = {
    colorectal: { min: 1, max: 2 },
  };

  const total = selected.reduce((acc, [organ]) => {
    const visits = visitMap[organ] || { min: 1, max: 1 };
    acc.labels.push(organLabels[organ]);
    acc.minCost += actionMap[organ][2];
    acc.maxCost += actionMap[organ][3];
    acc.minVisits += visits.min;
    acc.maxVisits += visits.max;
    return acc;
  }, { labels: [], minCost: 0, maxCost: 0, minVisits: 0, maxVisits: 0 });

  const savedMin = Math.max(0, total.minVisits - 1);
  const savedMax = Math.max(0, total.maxVisits - 1);
  const savedVisitsText = savedMin === savedMax ? `${savedMax} 次` : `${savedMin}-${savedMax} 次`;
  const tradVisitsText = total.minVisits === total.maxVisits ? `${total.maxVisits}` : `${total.minVisits}-${total.maxVisits}`;
  const decisionCount = Math.max(1, selected.length);
  const decisionText = decisionCount > 1
    ? `${decisionCount} 个方向逐项排序、预约和解释结果的决策成本`
    : '先判断查哪个项目、怎么预约、怎么解读结果的决策成本';
  const timeText = savedMax >= 3 ? '半天到数天' : savedMax >= 1 ? '半天左右到 1-2 天' : '前期反复判断的时间';
  const moneyText = total.maxCost > 3000
    ? `如果传统项目都逐项完成，费用上最多可能少花约 ${total.maxCost - 3000} 元。`
    : '费用未必一定更低，但优势主要在少跑医院、少纠结和更快形成整体判断。';

  return {
    ...total,
    savedVisitsText,
    tradVisitsText,
    decisionText,
    timeText,
    moneyText,
  };
}

function urgencyNudgeSummary(risks) {
  const dims = sumStage1();
  const topRisks = risks.slice(0, 3).map(([organ]) => organLabels[organ]).join('、');
  const unknownCount = unknownAnswerCount();
  const items = [];

  if (num('s2_symptom_duration') >= 2) {
    items.push(isParent()
      ? '你前面提到爸妈的不适已经持续 1 个月以上。如果这件事不尽快确认，后面每次不舒服都会继续变成一次新的担心。'
      : '你前面提到不适已经持续 1 个月以上。如果不尽快确认，接下来每一次反复不舒服都会继续消耗你的注意力。');
  }
  if (num('s2_reflux_swallow') >= 2) {
    items.push(isParent()
      ? '你提到爸妈经常有反酸、烧心或吞咽不适。这类问题很容易被当成“小毛病”，但也最容易反复拖着说不清。'
      : '你提到经常有反酸、烧心或吞咽不适。这类问题如果一直没有答案，会在吃饭、睡觉和复发时不断提醒你。');
  }
  if (num('s2_urinary_issue') >= 2) {
    items.push(isParent()
      ? '你提到爸妈有泌尿异常相关情况。只要没有排除关键风险，尿频、尿血这类信号就很难真正让人放心。'
      : '你提到有泌尿异常相关情况。只要没有排除关键风险，这类信号就会一直留下一个“到底有没有事”的问号。');
  }
  if (num('s2_breast_issue') >= 2) {
    items.push(isParent()
      ? '你提到妈妈有乳腺异常或长期随访情况。如果继续拖着，只会让每次复查前后的不确定感继续累积。'
      : '你提到有乳腺异常或长期随访情况。如果继续拖着，每次想到复查都会重新进入一轮不确定。');
  }
  if (num('s2_screening') >= 1) {
    items.push(isParent()
      ? '你前面也提到爸妈从未系统做过相关筛查。风险不是因为不看就不存在，只是继续停在看不清的状态里。'
      : '你前面也提到自己从未做过相关筛查。风险不是因为不看就不存在，只是继续停在看不清的状态里。');
  }
  if (dims.D6 >= 2) {
    items.push(isParent()
      ? '家族因素是你自己在前面提到的担心来源。它不代表一定有问题，但确实更适合早点把关键方向看清楚。'
      : '家族因素是你自己在前面提到的担心来源。它不代表一定有问题，但确实更适合早点把关键方向看清楚。');
  }
  if (dims.D4 >= 4) {
    items.push(isParent()
      ? '从体检和早筛态度看，这件事很容易继续被推后。真正麻烦的往往不是检查，而是一直没有开始。'
      : '从体检和早筛态度看，这件事很容易继续被推后。真正麻烦的往往不是检查，而是一直没有开始。');
  }
  if (unknownCount >= 2) {
    items.push(isParent()
      ? `你在帮爸妈填写时有 ${unknownCount} 个关键信息暂时不清楚。信息不完整不代表风险更高，但会让“先查哪个、怎么查”更难判断。`
      : `你有 ${unknownCount} 个关键信息暂时不清楚。信息不完整不代表风险更高，但会让“先查哪个、怎么查”更难判断。`);
  }

  const fallback = isParent()
    ? `爸妈当前更值得关注的方向集中在 ${topRisks}。如果继续观望，你后面仍然要反复判断“要不要带他们去查、先查哪个、会不会太折腾”。`
    : `你当前更值得关注的方向集中在 ${topRisks}。如果继续观望，后面仍然要反复判断“要不要查、先查哪个、是不是想多了”。`;

  const visibleItems = (items.length ? items : [fallback]).slice(0, 3);

  return {
    title: isParent() ? '建议尽量在 12 个月内帮爸妈完成一次关键确认' : '建议尽量在 12 个月内完成一次关键确认',
    opening: isParent()
      ? '这不是为了制造焦虑，而是因为你前面已经提到了一些会持续困扰决策的线索。只要不确认，它们就会一直留在心里。'
      : '这不是为了制造焦虑，而是因为你前面已经提到了一些会持续困扰你的线索。只要不确认，它们就会一直留在心里。',
    items: visibleItems,
    close: isParent()
      ? '越早把不确定性压缩掉，后面越容易少跑弯路、少反复劝说，也更容易帮爸妈做一个明确决定。'
      : '越早把不确定性压缩掉，后面越容易少纠结、少反复搜索，也更容易做一个明确决定。',
  };
}

function renderPlan() {
  const recs = traditionalList(2);
  const comp = comparisonSummary();
  return `
    <section class="card">
      <div class="notice amber">${state.planChoice === 'mced' ? '你选择了：先整体评估（MCED思路）' : '你选择了：按传统路径逐项筛查'}</div>
      <h2 style="margin-top:16px">${isParent() ? '两种路径，哪种更适合帮爸妈少折腾地推进' : '两种路径，分别适合解决什么问题'}</h2>
      <div class="stack" style="margin-top:16px">
        <div class="split">
          <div class="mini"><strong>传统筛查</strong><br>按 ${comp.labels.join(' / ')} 等方向分别安排。</div>
          <div class="mini blue"><strong>MCED 整体评估</strong><br>先做一次整体判断，再决定后续是否做针对性检查。</div>
        </div>
        <div class="split">
          <div class="mini">预计约 ${comp.count} 次检查 / 就诊，合计约 ${comp.min}-${comp.max} 元，部分项目医保可报。</div>
          <div class="mini blue">约3000元，医保不可报，线下1次采血即可，减少前期判断与反复安排成本。</div>
        </div>
      </div>
    </section>
    <section class="card">
      <h2>${isParent() ? '下一步怎么帮爸妈推进' : '下一步怎么做'}</h2>
      <div class="stack" style="margin-top:14px">
        <div class="risk-card">
          <h3>如果倾向传统路径</h3>
          <p class="body" style="margin-top:8px">可以先从 ${recs[0]?.title || '基础筛查'} 开始${recs[1] ? `，再考虑 ${recs[1].title}` : ''}。</p>
          <button class="btn" style="width:100%;margin-top:12px" data-action="go-consult">细化传统筛查顺序</button>
        </div>
        <div class="mini blue">
          <h3>如果更想少跑医院、少纠结</h3>
          <p style="margin-top:8px">多癌种早筛（DNA 甲基化检测）一次性覆盖约16种常见癌症风险评估，只需抽一管血，线下1次完成。</p>
          <button class="btn blue" style="width:100%;margin-top:12px" data-action="go-consult">判断是否适合整体评估</button>
        </div>
      </div>
    </section>
    <button class="btn" style="width:100%" data-action="go-final">返回结果页</button>
  `;
}

function renderConsult() {
  const intentText = {
    mced: isParent() ? '我们会帮你判断：是否适合用一次整体评估，帮爸妈少折腾地推进。' : '我们会帮你判断：是否适合用一次整体评估来降低不确定性。',
    traditional: isParent() ? '我们会帮你把给爸妈的筛查顺序拆清楚，尽量减少来回折腾。' : '我们会帮你把筛查顺序拆清楚，避免多走弯路。',
    general: isParent() ? '我们会基于父母的情况，给出更贴合的建议路径。' : '我们会基于你的情况，给出更贴合的建议路径。',
  };
  return `
    <section class="card">
      <p class="muted">${isParent() ? '你已经完成了给爸妈的风险判断' : '你已经完成了风险判断'}</p>
      <h2>${isParent() ? '现在是在决定：怎么帮爸妈用更少折腾的方式开始第一步' : '现在是在决定：如何开始第一步'}</h2>
      <p class="body" style="margin-top:12px">${state.planChoice === 'mced' ? '你更像是在解决“不确定先查哪个”的问题，我们会先按整体评估这条路径继续往下帮你判断。' : '我们先帮你把下一步这件事变简单。'}</p>
    </section>
    <section class="card">
      <h2>${isParent() ? '你现在更希望先帮爸妈解决哪件事？' : '你现在更希望解决哪件事？'}</h2>
      <p class="muted" style="margin-top:8px">这一步不是提交表单，而是先把你的下一步意图理清楚。</p>
      <div class="options">
        <button class="choice" data-action="intent" data-value="mced">${isParent() ? '我不太确定先给爸妈查哪个，想判断是否适合整体评估' : '我不太确定先查哪个，想判断是否适合整体评估'}</button>
        <button class="choice" data-action="intent" data-value="traditional">${isParent() ? '我已经有方向了，想把给爸妈的筛查顺序细化一下' : '我已经有方向了，想把筛查顺序细化一下'}</button>
        <button class="choice" data-action="intent" data-value="general">${isParent() ? '我想先跟专业的人聊一下爸妈的情况' : '我想先跟专业的人聊一下我的情况'}</button>
      </div>
    </section>
    ${state.consultSubmitted ? `<section class="card"><div class="notice green"><strong>好的，这一步已经帮你理清了</strong><br>${intentText[state.consultIntent]}</div></section>` : ''}
    <section class="card">
      <p class="muted">如果你希望继续往下走</p>
      <p class="body" style="margin-top:8px">你可以直接联系，也可以留个方式，方便后续在你需要的时候再沟通。</p>
      <div class="notice" style="margin-top:14px">示意联系方式<br><strong style="font-size:20px;color:#0f172a">13800138000</strong></div>
      <input class="input" style="margin-top:14px" data-action="phone" value="${state.userPhone}" placeholder="留下手机号（可选）" />
      ${state.userPhone ? '<p class="muted" style="margin-top:8px">当前为 DEMO，不会真实提交，仅用于流程验证</p>' : ''}
    </section>
    <button class="btn" style="width:100%" data-action="go-plan">返回方案页</button>
  `;
}

function renderLanding() {
  const s2 = stage2Questions();
  return `
    <section class="card">
      <p class="muted">风险分是怎么算出来的？</p>
      <h2>你的所有答题与风险映射</h2>
      <p class="body" style="margin-top:10px">这些回答共同影响了风险参考分。这个分数不是诊断结果，而是帮助你判断哪些方向更值得优先确认。</p>
    </section>
    <section class="card">
      <h2>你的作答情况</h2>
      <div class="stack" style="margin-top:14px">
        ${stage1Questions.map((q) => {
          const idx = state.stage1Answers[q.id];
          if (idx === undefined) return '';
          return `<div class="mini"><span class="muted">${getQuestionTitle(q)}</span><br><strong>${getOptionLabel(q.id, q.options[idx].label)}</strong></div>`;
        }).join('')}
        ${s2.map((q) => {
          const val = state.stage2Answers[q.id];
          const options = getQuestionOptions(q);
          if (val === undefined) return '';
          const text = q.type === 'single'
            ? getOptionLabel(q.id, options.find((o) => o.value === val)?.label || '')
            : (val || []).map((v) => {
              const label = options.find((o) => o.value === v)?.label;
              return label ? getOptionLabel(q.id, label) : '';
            }).filter(Boolean).join(' / ');
          return `<div class="mini"><span class="muted">${getQuestionTitle(q)}</span><br><strong>${text || '未选择'}</strong></div>`;
        }).join('')}
      </div>
    </section>
    <button class="btn primary" style="width:100%" data-action="reset">我也测一下</button>
  `;
}

function render() {
  const screens = {
    home: renderHome,
    stage1: renderStage1,
    stage1Result: renderStage1Result,
    stage2: renderStage2,
    final: renderFinal,
    plan: renderPlan,
    consult: renderConsult,
    landing: renderLanding,
  };
  app.innerHTML = `<div class="shell"><div class="stack">${screens[state.screen]()}</div><p class="footer">当前版本为 DEMO，用于验证流程、文案和模块层级，不替代医学建议。</p></div>`;
}

function setScreen(screen) {
  if (state.screen === screen) return;
  state.screen = screen;
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  });
}

function resetAll() {
  Object.assign(state, {
    screen: 'home',
    audienceChoice: null,
    planChoice: null,
    stage1Index: 0,
    stage2Index: 0,
    showAllRisks: false,
    consultIntent: '',
    consultSubmitted: false,
    userPhone: '',
    stage1Answers: {},
    stage2Answers: {},
  });
}

function toggleMulti(qid, value) {
  const current = Array.isArray(state.stage2Answers[qid]) ? state.stage2Answers[qid] : [];
  let next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
  const exclusiveValues = ['none', 'unknown'];
  if (exclusiveValues.includes(value) && !current.includes(value)) next = [value];
  if (!exclusiveValues.includes(value)) next = next.filter((v) => !exclusiveValues.includes(v));
  state.stage2Answers[qid] = next;
}

function goNextStage1() {
  if (state.stage1Index === stage1Questions.length - 1) setScreen('stage1Result');
  else state.stage1Index += 1;
}

function goNextStage2() {
  const questions = stage2Questions();
  if (state.stage2Index === questions.length - 1) setScreen('final');
  else state.stage2Index += 1;
}

app.addEventListener('click', (event) => {
  const target = event.target.closest('[data-action]');
  if (!target || target.disabled) return;
  const action = target.dataset.action;
  const value = target.dataset.value;
  const currentStage2 = stage2Questions()[state.stage2Index];

  if (action === 'audience') {
    state.audienceChoice = value;
    setScreen('stage1');
  }
  if (action === 'stage1-answer') {
    state.stage1Answers[stage1Questions[state.stage1Index].id] = Number(value);
    goNextStage1();
  }
  if (action === 'stage1-prev') {
    if (state.stage1Index === 0) {
      setScreen('home');
      state.audienceChoice = null;
    } else {
      state.stage1Index -= 1;
    }
  }
  if (action === 'stage1-next') {
    goNextStage1();
  }
  if (action === 'go-stage2') setScreen('stage2');
  if (action === 'stage2-answer') {
    const found = getQuestionOptions(currentStage2).find((opt) => String(opt.value) === value);
    state.stage2Answers[currentStage2.id] = found?.value ?? value;
    goNextStage2();
  }
  if (action === 'multi-answer') toggleMulti(currentStage2.id, value);
  if (action === 'multi-skip') state.stage2Answers[currentStage2.id] = [];
  if (action === 'stage2-prev') state.stage2Index = Math.max(0, state.stage2Index - 1);
  if (action === 'stage2-next') {
    goNextStage2();
  }
  if (action === 'toggle-risks') state.showAllRisks = !state.showAllRisks;
  if (action === 'choose-plan') {
    state.planChoice = value;
    setScreen('plan');
  }
  if (action === 'go-consult') setScreen('consult');
  if (action === 'go-final') setScreen('final');
  if (action === 'go-plan') setScreen('plan');
  if (action === 'go-landing') setScreen('landing');
  if (action === 'intent') {
    state.consultIntent = value;
    state.consultSubmitted = true;
  }
  if (action === 'reset') resetAll();
  render();
});

app.addEventListener('input', (event) => {
  if (event.target.matches('[data-action="phone"]')) {
    state.userPhone = event.target.value;
  }
});

render();
