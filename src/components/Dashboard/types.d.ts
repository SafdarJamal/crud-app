import { Employee } from "../../types";

export interface DashboardProps {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AddProps {
  employees: Employee[];
  setEmployees: (employees: Employee[]) => void;
  setIsAdding: (value: boolean) => void;
}

export interface EditProps {
  employees: Employee[];
  selectedEmployee: Employee;
  setEmployees: (employees: Employee[]) => void;
  setIsEditing: (value: boolean) => void;
}

export interface TableProps {
  employees: Employee[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
}

export interface HeaderProps {
  setIsAdding: (value: boolean) => void;
  setIsAuthenticated: (value: boolean) => void;
}
