
export const scrollNavigation = () => {
  var doc = document.documentElement;
  var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  var topnav = document.getElementById('topnav');
  if (top > 80 && topnav) {
      topnav.classList.add('nav-sticky');
  }
  else if (topnav) {
      topnav.classList.remove('nav-sticky');
  }
}

export const scrolTabslNavigation = () => {
  var topnavTabs = document.getElementById('topnav-tabs');

  var productsTabs = document.getElementById('products-tabs');
  var productsTabsTop = productsTabs.getBoundingClientRect().top;
  
  if(topnavTabs && productsTabs && productsTabsTop && productsTabsTop < 87) {
    topnavTabs.classList.add('nav-tabs-active');
  } else if (topnavTabs) {
    topnavTabs.classList.remove('nav-tabs-active');
  } 
}

export const scrollAlertlNavigation = () => {
  var formAlertSuccess = document.getElementById('form-alert-success');
  var formAlertError = document.getElementById('form-alert-error');

  formAlertSuccess && formAlertSuccess.scrollIntoView({ behavior: 'instant', block: 'center' });
  formAlertError && formAlertError.scrollIntoView({ behavior: 'instant', block: 'center' });

}

   
export const niceBytes = (x) => {
  const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  let l = 0, n = parseInt(x, 10) || 0;

  while(n >= 1024 && ++l){
      n = n/1024;
  }
  
  return(n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}