import Ember from 'ember';

export function numberToHumanSize(params/*, hash*/) {
  let bytes = params[0];
  let si = !params[1];
  let roundAmount = params[2] || 0;
  let thresh = si ? 1000 : 1024;
  let u = -1;
  let units = si ?
    ['kB','MB','GB','TB','PB','EB','ZB','YB'] :
    ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];

  if (Math.abs(bytes) < thresh) {
    return `${bytes} B`;
  }

  do {
    bytes /= thresh;
    ++u;
  } while(Math.abs(bytes) >= thresh && u < units.length - 1);

  return `${bytes.toFixed(roundAmount)} ${units[u]}`;
}

export default Ember.HTMLBars.makeBoundHelper(numberToHumanSize);
