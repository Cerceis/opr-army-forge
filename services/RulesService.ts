import { ISpecialRule } from "../data/interfaces";

export default class RulesService {
  public static displayName(rule: ISpecialRule, count: number = null) {

    const countStr = (count > 1 ? `${count}x ` : "");
    const ratingStr = rule.rating
      ? rule.name === "Defense"
        ? ` +${rule.rating}`
        : `(${(rule.modify ? "+" : "") + rule.rating})`
      : "";
    return countStr
      + rule.name
      + (ratingStr)
      + (rule.condition ? ` ${rule.condition}` : "");
  }
}