import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

// O4N - Deltascape 4.0 Normal
export default {
  zoneId: ZoneId.DeltascapeV40,
  timelineFile: 'o4n.txt',
  triggers: [
    {
      id: 'O4N Doom',
      netRegex: NetRegexes.startsUsing({ id: '24B7', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24B7', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24B7', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24B7', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24B7', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24B7', source: '엑스데스', capture: false }),
      condition: (data) => data.CanCleanse(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Cleanse Doom soon',
          de: 'Reinige Verhängnis bald',
          fr: 'Guérison sur le Glas bientot',
          ja: '死の宣告にエスナ',
          cn: '驱散死宣',
          ko: '죽음의 선고 해제하기',
        },
      },
    },
    {
      id: 'O4N Standard Thunder',
      netRegex: NetRegexes.startsUsing({ id: '24BD', source: 'Exdeath' }),
      netRegexDe: NetRegexes.startsUsing({ id: '24BD', source: 'Exdeath' }),
      netRegexFr: NetRegexes.startsUsing({ id: '24BD', source: 'Exdeath' }),
      netRegexJa: NetRegexes.startsUsing({ id: '24BD', source: 'エクスデス' }),
      netRegexCn: NetRegexes.startsUsing({ id: '24BD', source: '艾克斯迪司' }),
      netRegexKo: NetRegexes.startsUsing({ id: '24BD', source: '엑스데스' }),
      response: Responses.tankCleave(),
    },
    {
      id: 'O4N Standard Fire',
      netRegex: NetRegexes.startsUsing({ id: '24BA', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24BA', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24BA', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24BA', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24BA', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24BA', source: '엑스데스', capture: false }),
      suppressSeconds: 5,
      response: Responses.spread(),
    },
    {
      id: 'O4N Empowered Blizzard',
      netRegex: NetRegexes.startsUsing({ id: '24C0', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24C0', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24C0', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24C0', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24C0', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24C0', source: '엑스데스', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Move around',
          de: 'Bewegen',
          fr: 'Bougez',
          ja: '動き続ける',
          cn: '不停移动',
          ko: '움직이기',
        },
      },
    },
    {
      id: 'O4N Empowered Fire',
      netRegex: NetRegexes.startsUsing({ id: '24BF', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24BF', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24BF', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24BF', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24BF', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24BF', source: '엑스데스', capture: false }),
      response: Responses.stopEverything(),
    },
    {
      id: 'O4N Empowered Thunder',
      netRegex: NetRegexes.startsUsing({ id: '24C1', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24C1', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24C1', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24C1', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24C1', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24C1', source: '엑스데스', capture: false }),
      response: Responses.getOut(),
    },
    {
      id: 'O4N Decisive Battle ',
      netRegex: NetRegexes.startsUsing({ id: '2408', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '2408', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '2408', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '2408', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '2408', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '2408', source: '엑스데스', capture: false }),
      condition: (data) => {
        // Without a condition, this notifies on the first one, where it's meaningless.
        data.battleCount = data.battleCount || 0;
        data.battleCount += 1;
        return data.battleCount > 1;
      },
      delaySeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Stand in the gap',
          de: 'In der Lücke stehen',
          fr: 'Placez-vous à l\'écart',
          ja: '狭間に',
          cn: '远离中间位置',
          ko: '빈틈에 서기',
        },
      },
    },
    {
      id: 'O4N Zombie Breath',
      netRegex: NetRegexes.startsUsing({ id: '240A', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '240A', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '240A', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '240A', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '240A', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '240A', source: '엑스데스', capture: false }),
      delaySeconds: 6,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Behind head--Avoid zombie breath',
          de: 'Hinter den Kopf - Vermeide den Zombie-Atem',
          fr: 'Derrière la tête - Évitez l\'haleine zombie',
          ja: '頭の後ろに - ゾンビブレス来るぞ',
          cn: '站头后方',
          ko: '머리 뒤로 - 좀비 숨결 피하기',
        },
      },
    },
    {
      id: 'O4N Black Hole',
      netRegex: NetRegexes.startsUsing({ id: '24C8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24C8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24C8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24C8', source: 'エクスデス', target: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24C8', source: '艾克斯迪司', target: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24C8', source: '엑스데스', target: '엑스데스', capture: false }),
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Avoid black holes',
          de: 'Weiche den Schwarzen Löchern aus',
          fr: 'Évitez les trous noirs',
          ja: 'ブラックホールから離れる',
          cn: '远离黑洞',
          ko: '블랙홀 피하기',
        },
      },
    },
    {
      id: 'O4N Vacuum Wave',
      netRegex: NetRegexes.startsUsing({ id: '24B8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24B8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24B8', source: 'Exdeath', target: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24B8', source: 'エクスデス', target: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24B8', source: '艾克斯迪司', target: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24B8', source: '엑스데스', target: '엑스데스', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'O4N Flare',
      netRegex: NetRegexes.headMarker({ id: '0057' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Flare on YOU',
          de: 'Flare auf DIR',
          fr: 'Brasier sur VOUS',
          ja: '自分にフレア',
          cn: '核爆点名',
          ko: '플레어 대상자',
        },
      },
    },
    {
      id: 'O4N Holy',
      netRegex: NetRegexes.headMarker({ id: '003E' }),
      response: Responses.stackMarkerOn(),
    },
    {
      id: 'O4N Meteor',
      netRegex: NetRegexes.startsUsing({ id: '24C6', source: 'Exdeath', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ id: '24C6', source: 'Exdeath', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ id: '24C6', source: 'Exdeath', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ id: '24C6', source: 'エクスデス', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ id: '24C6', source: '艾克斯迪司', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ id: '24C6', source: '엑스데스', capture: false }),
      condition: Conditions.caresAboutAOE(),
      response: Responses.bigAoe(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Deathly Vine': 'Seelenbaumranke',
        'Exdeath': 'Exdeath',
      },
      'replaceText': {
        'Black Hole': 'Schwarzes Loch',
        'Blizzard/Fire III': 'Eisga/Feuga',
        'Clearout': 'Kreisfeger',
        'Collision': 'Aufprall',
        'Doom': 'Verhängnis',
        'Flare': 'Flare',
        'Holy': 'Sanctus',
        'Mega Blizzard/Fire/Thunder': 'Eisga/Feuga/Blitzga ++',
        'Meteor': 'Meteor',
        'The Decisive Battle': 'Entscheidungsschlacht',
        '(?<!/)Thunder III': 'Blitzga',
        'Vacuum Wave': 'Vakuumwelle',
        'Zombie Breath': 'Zombie-Atem',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'Deathly Vine': 'Lierre mortuaire',
        'Exdeath': 'Exdeath',
      },
      'replaceText': {
        '\\?': ' ?',
        '\\(Buster\\)': '(Tank buster)',
        'Black Hole': 'Trou noir',
        'Blizzard/Fire III': 'Méga Glace/Feu',
        'Clearout': 'Fauchage',
        'Collision': 'Impact',
        'Doom': 'Glas',
        'Flare': 'Brasier',
        'Holy': 'Miracle',
        'Mega Blizzard/Fire/Thunder': 'Extra Glace/Feu/Foudre',
        'Meteor': 'Météore',
        'The Decisive Battle': 'Combat décisif',
        '(?<!/)Thunder III': 'Méga Foudre',
        'Vacuum Wave': 'Vague de vide',
        'Zombie Breath': 'Haleine zombie',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'Deathly Vine': '霊樹の蔦',
        'Exdeath': 'エクスデス',
      },
      'replaceText': {
        'Black Hole': 'ブラックホール',
        'Blizzard/Fire III': 'ブリザガ/ファイガ',
        'Clearout': 'なぎ払い',
        'Collision': '衝撃',
        'Doom': '死の宣告',
        'Flare': 'フレア',
        'Holy': 'ホーリー',
        'Mega Blizzard/Fire/Thunder': 'ブリザガ/ファイガ/サンダガ ++',
        'Meteor': 'メテオ',
        'The Decisive Battle': '決戦',
        '(?<!/)Thunder III': 'サンダガ',
        'Vacuum Wave': '真空波',
        'Zombie Breath': 'ゾンビブレス',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Deathly Vine': '灵树藤',
        'Exdeath': '艾克斯迪司',
      },
      'replaceText': {
        'Black Hole': '黑洞',
        'Blizzard/Fire III': '冰封/爆炎',
        'Clearout': '横扫',
        'Collision': '冲击',
        'Doom': '死亡宣告',
        'Flare': '核爆',
        'Holy': '神圣',
        'Mega Blizzard/Fire/Thunder': '冰封/爆炎/暴雷 ++',
        'Meteor': '陨石',
        'The Decisive Battle': '决战',
        '(?<!/)Thunder III': '暴雷',
        'Vacuum Wave': '真空波',
        'Zombie Breath': '死亡吐息',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Deathly Vine': '영목 덩굴',
        'Exdeath': '엑스데스',
      },
      'replaceText': {
        'Black Hole': '블랙홀',
        'Blizzard/Fire III': '블리자가/파이가',
        'Clearout': '휩쓸기',
        'Collision': '충격',
        'Doom': '죽음의 선고',
        'Flare': '플레어',
        'Holy': '홀리',
        'Mega Blizzard/Fire/Thunder': '블리자가/파이가/선더가 ++',
        'Meteor': '메테오',
        'The Decisive Battle': '결전',
        '(?<!/)Thunder III': '선더가',
        'Vacuum Wave': '진공파',
        'Zombie Breath': '좀비 숨결',
      },
    },
  ],
};
