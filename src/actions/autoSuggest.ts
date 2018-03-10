export enum AutoSuggestActionsEnum {
  CHANGE_TEXT = 'CHANGE_TEXT'
}

export interface AutoSuggestAction {
  type: AutoSuggestActionsEnum;
  fieldValue: string;
}

export function changeInputValue(fieldValue: string): AutoSuggestAction {
  return {
    type: AutoSuggestActionsEnum.CHANGE_TEXT,
    fieldValue,
  };
}