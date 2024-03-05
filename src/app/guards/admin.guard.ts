import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const notifierService = inject(NotifierService);
  if (localStorage.getItem('username') === 'admin') {
    return true;
  } else {
    router.navigate(['/home']);
    notifierService.notify('error', ' 🤦👊  ياهندسه وربنا انتا مش ادمن');
    notifierService.notify('error', 'register with name admin pleaz😄');
    return false;
  }
};
