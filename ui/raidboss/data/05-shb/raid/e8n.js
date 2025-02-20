import Conditions from '../../../../../resources/conditions';
import NetRegexes from '../../../../../resources/netregexes';
import { Responses } from '../../../../../resources/responses';
import ZoneId from '../../../../../resources/zone_id';

export default {
  zoneId: ZoneId.EdensVerseRefulgence,
  timelineFile: 'e8n.txt',
  timelineTriggers: [
    {
      id: 'E8N Shining Armor',
      regex: /Shining Armor/,
      beforeSeconds: 2,
      response: Responses.lookAway('alert'),
    },
  ],
  triggers: [
    {
      id: 'E8N Mirrors Active',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD4', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD4', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD4', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DD4', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DD4', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DD4', capture: false }),
      run: (data) => {
        data.mirrorsActive = true;
      },
    },
    {
      id: 'E8N Biting Frost',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDB', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDB', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDB', capture: false }),
      condition: (data) => !data.mirrorsActive,
      response: Responses.getBehind(),
    },
    {
      id: 'E8N Driving Frost',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDC', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDC', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDC', capture: false }),
      condition: (data) => !data.mirrorsActive,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Go Front / Sides',
          de: 'Gehe nach Vorne/ zu den Seiten',
          fr: 'Allez devant / sur les côtés',
          ja: '前 / 横　へ',
          cn: '来 前方 / 两侧',
          ko: '앞 / 양옆으로',
        },
      },
    },
    {
      id: 'E8N Axe Kick',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DE2', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DE2', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DE2', capture: false }),
      condition: (data) => !data.mirrorsActive,
      response: Responses.getOut(),
    },
    {
      id: 'E8N Scythe Kick',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE3', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE3', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE3', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DE3', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DE3', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DE3', capture: false }),
      response: Responses.getUnder(),
    },
    {
      id: 'E8N Biting Frost With Mirror',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDB', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDB', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDB', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDB', capture: false }),
      condition: (data) => data.mirrorsActive,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Get behind, then South',
          de: 'Gehe nach Hinten, danach in den Süden',
          fr: 'Passez derrière, puis au Sud',
          ja: '後ろに、そして南へ',
          cn: '背面 => 南方',
          ko: '보스 뒤로 => 남쪽으로',
        },
      },
    },
    {
      id: 'E8N Driving Frost With Mirror',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDC', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDC', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDC', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDC', capture: false }),
      condition: (data) => data.mirrorsActive,
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Go Front / Sides, then North',
          de: 'Gehe nach Vorne, danach in den Norden',
          fr: 'Allez devant / sur les côtés, puis au Nord',
          ja: '前 / 横、そして北へ',
          cn: '前/侧面 => 北方',
          ko: '앞/양옆으로 => 북쪽으로',
        },
      },
    },
    {
      id: 'E8N Axe Kick With Mirror',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE2', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DE2', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DE2', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DE2', capture: false }),
      condition: (data) => data.mirrorsActive,
      response: Responses.getOutThenIn(),
    },
    {
      id: 'E8N Reflected Scythe Kick',
      netRegex: NetRegexes.startsUsing({ source: 'Frozen Mirror', id: '4E01', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Eisspiegel', id: '4E01', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'miroir de glace', id: '4E01', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '氷面鏡', id: '4E01', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '冰面镜', id: '4E01', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '얼음 거울', id: '4E01', capture: false }),
      suppressSeconds: 3,
      infoText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: 'Close to mirrors',
          de: 'Nahe zu den Spiegeln',
          fr: 'Près des mirroirs',
          ja: '鏡に近づく',
          cn: '靠近镜子',
          ko: '거울 밑으로',
        },
      },
    },
    {
      id: 'E8N Mirror Cleanup',
      netRegex: NetRegexes.startsUsing({ source: 'Frozen Mirror', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Eisspiegel', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'miroir de glace', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: '氷面鏡', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '冰面镜', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '얼음 거울', id: ['4DFE', '4DFF', '4E00', '4E01'], capture: false }),
      // Maybe not necessary to delay here, but just to be safe.
      delaySeconds: 5,
      run: (data) => {
        data.mirrorsActive = false;
      },
    },
    {
      id: 'E8N Absolute Zero',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD7', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD7', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD7', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DD7', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DD7', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DD7', capture: false }),
      condition: Conditions.caresAboutMagical(),
      response: Responses.aoe(),
    },
    {
      id: 'E8N Double Slap',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDA' }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDA' }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDA' }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDA' }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDA' }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDA' }),
      condition: Conditions.caresAboutPhysical(),
      response: Responses.tankBuster(),
    },
    {
      id: 'E8N Frigid Water',
      netRegex: NetRegexes.headMarker({ id: '0057' }),
      condition: Conditions.targetIsYou(),
      infoText: (_data, _matches, output) => output.text(),
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
      id: 'E8N Icicle Impact',
      netRegex: NetRegexes.headMarker({ id: '0060' }),
      condition: Conditions.targetIsYou(),
      response: Responses.spread(),
    },
    {
      id: 'E8N Puddle Chase',
      netRegex: NetRegexes.headMarker({ id: '00C5' }),
      condition: Conditions.targetIsYou(),
      alertText: (_data, _matches, output) => output.text(),
      outputStrings: {
        text: {
          en: '3x puddles on YOU',
          de: '3x Fläche auf DIR',
          fr: '3x Zones au sol sur vous',
          ja: '自分に３回円範囲',
          cn: '三次放圈点名',
          ko: '따라오는 장판 피하기',
        },
      },
    },
    {
      id: 'E8N Holy',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DEC', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DEC', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DEC', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DEC', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DEC', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DEC', capture: false }),
      response: Responses.getOut('info'),
    },
    {
      id: 'E8N Holy Divided',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DED', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DED', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DED', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DED', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DED', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DED', capture: false }),
      response: Responses.getIn(),
    },
    {
      id: 'E8N Light Rampant Collect',
      netRegex: NetRegexes.headMarker({ id: '0017' }),
      run: (data, matches) => {
        data.rampant = data.rampant || {};
        data.rampant[matches.target] = matches.id;
      },
    },
    {
      id: 'E8N Light Rampant',
      netRegex: NetRegexes.headMarker({ id: '0017', capture: false }),
      delaySeconds: 0.5,
      suppressSeconds: 2,
      alertText: (data, _matches, output) => {
        if (data.rampant[data.me])
          return output.coneOnYouAvoidTowers();

        return output.standInATower();
      },
      outputStrings: {
        coneOnYouAvoidTowers: {
          en: 'Cone on YOU -- avoid towers',
          de: 'Kegel AoE auf DIR -- Turm vermeiden',
          fr: 'Cône sur Vous -- évitez les tours',
          ja: '自分に範囲攻撃 (塔に当たらないように)',
          cn: '三角点名 -- 躲开塔',
          ko: '부채꼴 대상자 - 장판 피하기',
        },
        standInATower: {
          en: 'Stand in a tower',
          de: 'Im Turm stehen',
          fr: 'Placez-vous dans une tour',
          ja: '塔を踏む',
          cn: '踩塔',
          ko: '장판 들어가기',
        },
      },
    },
    {
      id: 'E8N Light Rampant Cleanup',
      netRegex: NetRegexes.ability({ source: 'Shiva', id: '4E0B', capture: false }),
      netRegexDe: NetRegexes.ability({ source: 'Shiva', id: '4E0B', capture: false }),
      netRegexFr: NetRegexes.ability({ source: 'Shiva', id: '4E0B', capture: false }),
      netRegexJa: NetRegexes.ability({ source: 'シヴァ', id: '4E0B', capture: false }),
      netRegexCn: NetRegexes.ability({ source: '希瓦', id: '4E0B', capture: false }),
      netRegexKo: NetRegexes.ability({ source: '시바', id: '4E0B', capture: false }),
      run: (data) => {
        delete data.rampant;
      },
    },
    {
      id: 'E8N Heavenly Strike',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD8', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD8', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DD8', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DD8', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DD8', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DD8', capture: false }),
      response: Responses.knockback(),
    },
    {
      id: 'E8N Twin Stillness',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDD', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDD', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDD', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDD', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDD', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDD', capture: false }),
      response: Responses.getBackThenFront('alert'),
    },
    {
      id: 'E8N Twin Silence',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDE', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDE', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DDE', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DDE', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DDE', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DDE', capture: false }),
      response: Responses.getFrontThenBack('alert'),
    },
    {
      id: 'E8N Spiteful Dance',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE4', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE4', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE4', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DE4', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DE4', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DE4', capture: false }),
      response: Responses.getOutThenIn(),
    },
    {
      id: 'E8N Embittered Dance',
      netRegex: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE5', capture: false }),
      netRegexDe: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE5', capture: false }),
      netRegexFr: NetRegexes.startsUsing({ source: 'Shiva', id: '4DE5', capture: false }),
      netRegexJa: NetRegexes.startsUsing({ source: 'シヴァ', id: '4DE5', capture: false }),
      netRegexCn: NetRegexes.startsUsing({ source: '希瓦', id: '4DE5', capture: false }),
      netRegexKo: NetRegexes.startsUsing({ source: '시바', id: '4DE5', capture: false }),
      response: Responses.getInThenOut(),
    },
  ],
  timelineReplace: [
    {
      'locale': 'de',
      'replaceSync': {
        'Luminous Aether': 'Lichtäther',
        'Frozen Mirror': 'Eisspiegel',
        'Electric Aether': 'Blitzäther',
        'Earthen Aether': 'Erdäther',
        'Shiva': 'Shiva',
        'Mothercrystal': 'Urkristall',
      },
      'replaceText': {
        'The Path of Light': 'Pfad des Lichts',
        'Twin Stillness': 'Zwillingsschwerter der Stille',
        'Stoneskin': 'Steinhaut',
        'Spiteful Dance': 'Kalter Tanz',
        'Skyfall': 'Vernichtung der Welt',
        'Shock Spikes': 'Schockstachel',
        'Shining Armor': 'Funkelnde Rüstung',
        'Shattered World': 'Zersplitterte Welt',
        'Scythe Kick': 'Abwehrtritt',
        'Rush': 'Sturm',
        'Redress': 'Beseitigung',
        'Mirror, Mirror': 'Spiegelland',
        'Light Rampant': 'Überflutendes Licht',
        'Icicle Impact': 'Eiszapfen-Schlag',
        'Holy': 'Sanctus',
        'Heavenly Strike': 'Elysischer Schlag',
        'Heart Asunder': 'Herzensbrecher',
        'Frost Armor(?! )': 'Frostrüstung',
        'Frigid Water': 'Eisfrost',
        'Frigid Stone': 'Eisstein',
        'Frigid Eruption': 'Eiseruption',
        'Driving Frost': 'Froststoß',
        'Double Slap': 'Doppelschlag',
        'Diamond Frost': 'Diamantstaub',
        'Bright Hunger': 'Erosionslicht',
        'Biting Frost': 'Frosthieb',
        'Axe Kick': 'Axttritt',
        'Absolute Zero': 'Absoluter Nullpunkt',
        'Reflected Kick/Frost': 'Spiegelung Tritt/Frost',
        'Reflected Frost': 'Spiegelung Frost',
        '(?<! )Kick/Frost': 'Tritt/Frost',
      },
    },
    {
      'locale': 'fr',
      'replaceSync': {
        'luminous aether': 'éther de lumière',
        'frozen mirror': 'miroir de glace',
        'electric aether': 'éther de foudre',
        'earthen aether': 'éther de terre',
        'Shiva': 'Shiva',
        'Mothercrystal': 'Cristal-mère',
      },
      'replaceText': {
        'The Path of Light': 'Voie de lumière',
        'Twin Stillness': 'Entaille de la quiétude',
        'Twin Silence': 'Entaille de la tranquilité',
        'Stoneskin': 'Cuirasse',
        'Spiteful Dance': 'Danse de la froideur',
        'Skyfall': 'Anéantissement',
        'Shock Spikes': 'Pointes de foudre',
        'Shining Armor': 'Armure scintillante',
        'Shattered World': 'Monde fracassé',
        'Scythe Kick': 'Jambe faucheuse',
        'Rush': 'Jaillissement',
        'Reflected Kick/Frost': 'Jambe/Givre Réverbéré',
        'Reflected Frost': 'Givre Réverbéré',
        'Redress': 'Parure',
        'Mirror, Mirror': 'Monde des miroirs',
        '(?<! )Kick/Frost': 'Jambe/Givre',
        'Light Rampant': 'Débordement de Lumière',
        'Icicle Impact': 'Impact de stalactite',
        'Holy': 'Miracle',
        'Heavenly Strike': 'Frappe céleste',
        'Heart Asunder': 'Cœur déchiré',
        'Frost Armor': 'Armure de givre',
        'Frigid Water': 'Cataracte gelée',
        'Frigid Stone': 'Rocher de glace',
        'Frigid Eruption': 'Éruption de glace',
        'Embittered Dance': 'Danse de la sévérité',
        'Driving Frost': 'Percée de givre',
        'Double Slap': 'Gifle redoublée',
        'Diamond Frost': 'Poussière de diamant',
        'Bright Hunger': 'Lumière dévorante',
        'Biting Frost': 'Taillade de givre',
        'Axe Kick': 'Jambe pourfendeuse',
        'Absolute Zero': 'Zéro absolu',
      },
    },
    {
      'locale': 'ja',
      'replaceSync': {
        'luminous aether': 'ライト・エーテル',
        'frozen mirror': '氷面鏡',
        'electric aether': 'ライトニング・エーテル',
        'earthen aether': 'アース・エーテル',
        'Shiva': 'シヴァ',
        'Mothercrystal': 'マザークリスタル',
      },
      'replaceText': {
        'The Path of Light': '光の波動',
        'Twin Stillness': '静寂の双剣技',
        'Stoneskin': 'ストンスキン',
        'Spiteful Dance': '冷厳の舞踏技',
        'Skyfall': '世界消滅',
        'Shock Spikes': 'ショックスパイク',
        'Shining Armor': 'ブライトアーマー',
        'Shattered World': 'シャッタード・ワールド',
        'Scythe Kick': 'サイスキック',
        'Rush': 'ラッシュ',
        'Reflected Kick/Frost': 'ミラーリング・アクスキック/フロストスラッシュ',
        'Reflected Frost': 'ミラーリング・フロストスラッシュ',
        'Redress': 'ドレスアップ',
        'Mirror, Mirror': '鏡の国',
        '(?<! )Kick/Frost': 'アクスキック/フロストスラッシュ',
        'Light Rampant': '光の暴走',
        'Icicle Impact': 'アイシクルインパクト',
        'Holy': 'ホーリー',
        'Heavenly Strike': 'ヘヴンリーストライク',
        'Heart Asunder': 'ハートアサンダー',
        'Frost Armor(?! )': 'フロストアーマー',
        'Frigid Water': 'アイスフロスト',
        'Frigid Stone': 'アイスストーン',
        'Frigid Eruption': 'アイスエラプション',
        'Driving Frost': 'フロストスラスト',
        'Double Slap': 'ダブルスラップ',
        'Diamond Frost': 'ダイヤモンドダスト',
        'Bright Hunger': '浸食光',
        'Biting Frost': 'フロストスラッシュ',
        'Axe Kick': 'アクスキック',
        'Absolute Zero': '絶対零度',
      },
    },
    {
      'locale': 'cn',
      'replaceSync': {
        'Shiva': '希瓦',
        'Frozen Mirror': '冰面镜',
        'Mothercrystal': '母水晶',
        'Earthen Aether': '土以太',
        'Electric Aether': '雷以太',
        'Luminous Aether': '光以太',
      },
      'replaceText': {
        'Absolute Zero': '绝对零度',
        'Redress': '换装',
        'Shining Armor': '闪光护甲',
        'Axe Kick/Scythe Kick': '阔斧/镰形回旋踢',
        'Frost Armor': '冰霜护甲',
        'Biting Frost/Driving Frost': '冰霜斩/刺',
        'Double Slap': '双剑斩',
        'Diamond Frost': '钻石星尘',
        'Frigid Water/Frigid Stone': '冰霜/冰石',
        'Icicle Impact': '冰柱冲击',
        'Frigid Eruption': '极冰喷发',
        'Heavenly Strike': '天降一击',
        'Mirror, Mirror': '镜中奇遇',
        'Driving Frost/Biting Frost': '冰霜刺/斩',
        'Reflected Frost': '连锁反射',
        'Shattered World': '世界分断',
        'Heart Asunder': '心碎',
        'Stoneskin': '石肤',
        'Shock Spikes': '电棘屏障',
        'Rush': '蓄势冲撞',
        'Skyfall': '世界消亡',
        'Holy': '神圣',
        'Light Rampant': '光之失控',
        'The Path of Light': '光之波动',
        'Bright Hunger': '侵蚀光',
        '(?<! )Kick/Frost': '阔斧/镰形',
        'Reflected Kick/Frost': '反射阔斧/镰形',
        'Twin Stillness/Twin Silence': '静寂/闲寂的双剑技',
        'Embittered Dance/Spiteful Dance': '严峻之舞/冷峻之舞',
        'Spiteful Dance/Embittered Dance': '冷峻之舞/严峻之舞',
      },
    },
    {
      'locale': 'ko',
      'replaceSync': {
        'Shiva': '시바',
        'Frozen Mirror': '얼음 거울',
        'Mothercrystal': '어머니 크리스탈',
        'Earthen Aether': '땅 에테르',
        'Electric Aether': '번개 에테르',
        'Luminous Aether': '빛 에테르',
      },
      'replaceText': {
        'Absolute Zero': '절대영도',
        'Redress': '환복',
        'Shining Armor': '빛의 갑옷',
        'Axe Kick/Scythe Kick': '도끼차기/낫차기',
        'Frost Armor': '서리 갑옷',
        'Biting Frost/Driving Frost': '서리 참격/일격',
        'Double Slap': '이중 타격',
        'Diamond Frost': '다이아몬드 더스트',
        'Frigid Water/Frigid Stone': '얼음서리/얼음돌',
        'Icicle Impact': '고드름 낙하',
        'Frigid Eruption': '얼음 분출',
        'Heavenly Strike': '천상의 일격',
        'Mirror, Mirror': '거울 나라',
        'Driving Frost/Biting Frost': '서리 일격/참격',
        'Reflected Frost': '반사된 서리 갑옷',
        'Shattered World': '분단된 세계',
        'Heart Asunder': '조각난 마음',
        'Stoneskin': '스톤스킨',
        'Shock Spikes': '번개 보호막',
        'Rush': '부딪기',
        'Skyfall': '세계 소멸',
        'Holy': '홀리',
        'Light Rampant': '빛의 폭주',
        'The Path of Light': '빛의 파동',
        'Bright Hunger': '침식광',
        '(?<! )Kick/Frost': '~차기/서리 참격',
        'Reflected Kick/Frost': '반사된 ~차기/서리 참격',
        'Twin Stillness/Twin Silence': '정적/고요의 쌍검기',
        'Embittered Dance/Spiteful Dance': '준엄/냉엄의 무도기',
        'Spiteful Dance/Embittered Dance': '냉엄/준엄의 무도기',
      },
    },
  ],
};
