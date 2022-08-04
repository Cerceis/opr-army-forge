import _ from "lodash";

export function groupBy(xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};


export function distinct(arr: any[], property?: string) {
  const results = [];
  for (let item of arr)
    if (!results.some(r => property ? r[property] === item[property] : r === item))
      results.push(item);
  return results;
};

export function logState(msg: string, state: any) {
  console.log(msg, makeCopy(state));
}

export function makeCopy(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}

export function gameSystemToSlug(gameSystem) {
  switch (gameSystem) {
    case "gf":
      return "grimdark-future";
    case "gff":
      return "grimdark-future-firefight";
    case "aof":
      return "age-of-fantasy";
    case "aofs":
      return "age-of-fantasy-skirmish";
    case "aofr":
      return "age-of-fantasy-regiments";
  }
}

export function gameSystemToEnum(gameSystem) {
  switch (gameSystem) {
    case "gf": return 2;
    case "gff": return 3;
    case "aof": return 4;
    case "aofs": return 5;
    case "aofr": return 6;
  }
}

export function tryBack(fallback: () => void) {
  if (history.length < 2) {
    fallback();
  } else {
    history.back();
  }
}

export function groupMap<In, Out>(obj: In[], keySelector: (item: In) => string, iteratee: (value: In[], key: string) => Out): Out[] {
  return _.chain(obj)
    .groupBy(keySelector)
    .map(iteratee)
    .value() as any;
}

export function intersperse<T>(arr: T[], sep: T): T[] {
  return arr
    .reduce((a: T[], v: T) => a.length ? [...a, sep, v] : [v], []);
}

export const isServer = () => typeof (window) === "undefined";
