import { AuthState, IUser } from './auth.state';
import { of, switchMap } from 'rxjs';

export function authInitializer(authState: AuthState) {
  return () => authState.get().pipe(
    switchMap((user: IUser | null) => {
      return user ? authState.set(user) : of(null)
    })
  );
}
