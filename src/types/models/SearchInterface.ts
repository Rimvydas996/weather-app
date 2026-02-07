interface SearchState {
  query: string;
}

interface DisplayExpendedProps extends SearchState {}

interface SearchBarQuery extends SearchState {
  setQuery: (value: string) => void;
}

export type { SearchState, DisplayExpendedProps, SearchBarQuery };
