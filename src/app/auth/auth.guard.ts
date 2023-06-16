import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { HTTPServiceService } from '../services/service.service';

export const authGuard: CanActivateFn = () => {
  const httpService = inject(HTTPServiceService);
  const router = inject(Router);
  httpService.isAuthenticated.subscribe((value) => {
    if (value === true) return true;
    else {
      router.navigate(['/login']);
      return false;
    }
  });

  return httpService.isAuthenticated;
};
