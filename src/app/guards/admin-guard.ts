import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const usuario = authService.getUsuario();

  if (usuario && authService.ehAdmin(usuario)) {
    return true;
  }

  router.navigate(['/login']);
  return false;
};