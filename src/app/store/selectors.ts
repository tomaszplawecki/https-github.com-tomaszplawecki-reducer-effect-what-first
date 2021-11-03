import { BasicState } from './reducers';

export class BasicSelectors {
  private static STATE = createFeatureSelector<BasicState>(BASIC_FEATURE_KEY);

  static VALUE = createSelector(
    BasicSelectors.STATE,
    (state: BasicState) => state.value
  );
}
