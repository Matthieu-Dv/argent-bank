import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from './store';

//Hook pour dispatcher des actions
export const useAppDispatch = () => useDispatch<AppDispatch>();

//Hook pour accéder à l'état global du store
export const useAppSelector = <T>(selector: (state: RootState) => T): T =>
  useSelector(selector);
