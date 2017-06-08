

export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }

  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

//��ȡԪ�������������ĺ�����
export function getLeftToBrowser(e) {
  var offset=e.offsetLeft; 
  if(e.offsetParent!=null) offset+=getLeftToBrowser(e.offsetParent); 
  return offset; 
}

/** 
* @description �¼��󶨣����ݸ������ 
* @param target �¼��������� 
* @param type �¼� 
* @param func �¼������� 
*/ 
export function addEvent(target, type, func) { 
    if (target.addEventListener) //��ie ��ie9 
        target.addEventListener(type, func, false); 
    else if (target.attachEvent) //ie6��ie8 
        target.attachEvent("on" + type, func); 
    else target["on" + type] = func; //ie5 
}; 

/** 
* @description �¼��Ƴ������ݸ������ 
* @param target �¼��������� 
* @param type �¼� 
* @param func �¼������� 
*/ 
export function removeEvent(target, type, func){ 
    if (target.removeEventListener) 
        target.removeEventListener(type, func, false); 
    else if (target.detachEvent) 
        target.detachEvent("on" + type, func); 
    else target["on" + type] = null; 
};  

export function getData(el, name, val) {
  const prefix = 'data-'
  if (val) {
    return el.setAttribute(prefix + name, val)
  }
  return el.getAttribute(prefix + name)
}

let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle(style) {
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}
