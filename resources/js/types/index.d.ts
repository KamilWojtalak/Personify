import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Contact {
    id: number;
    name: string;
    created_at: string;
    rating: 'GOOD' | 'AVERAGE' | 'POOR';
}

export interface PersonaType {
    id: number;
    name: string;
    children?: PersonaType[];
}

export interface Resource<T> {
    data: T[];
}

interface PaginateLink {
    active: boolean;
    label: string;
    url: string | null;
}

export interface Paginate<T> {
    data: T[];
    current_page: number;
    first_page_url: string;
    last_page_url: string;
    from: number;
    last_page: number;
    links: PaginateLink[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
}
