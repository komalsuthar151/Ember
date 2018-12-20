import { helper } from '@ember/component/helper';

export function demoTitle([title, about]/*, hash*/) {
  let returnStr = title;
  if(about != null){
    returnStr += ' - ' + about;
  }
  return returnStr;
}

export default helper(demoTitle);
