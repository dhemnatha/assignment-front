export interface Node {
  id: any;
  parent_id: any;
  label: string;
  count: number;
  selected?: boolean;
  show?: boolean;
}
