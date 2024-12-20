export interface IProjectDataType {
  title: string;
  period: string;
  desc: string;
  devStaff: { front?: number; back?: number; pm?: number; design?: number };
  skills: string[];
  detail: string[];
}
