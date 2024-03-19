export default interface Note {
  id: string;
  title: string;
  contents: string;
  backgroundColor: string;
  priority: string;
  tag: string[];
  createdAt: string;
  editedAt: string;
  isPinned: boolean;
  isArchived: boolean;
  isDeleted: boolean;
}
