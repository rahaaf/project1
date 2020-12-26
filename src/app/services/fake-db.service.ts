import { InMemoryDbService } from 'angular-in-memory-web-api';
import { AcademyFakeDb } from '../fake-db/fake-db/academy';
 import { ChatFakeDb } from '../fake-db/fake-db/chat';
import { ChatPanelFakeDb } from '../fake-db/fake-db/chat-panel';
import { ContactsFakeDb } from '../fake-db/fake-db/contacts'; 
import { AnalyticsDashboardDb } from '../fake-db/fake-db/dashboard-analytics';
import { ProjectDashboardDb } from '../fake-db/fake-db/dashboard-project';
import { ECommerceFakeDb } from '../fake-db/fake-db/e-commerce';
import { FaqFakeDb } from '../fake-db/fake-db/faq';
import { FileManagerFakeDb } from '../fake-db/fake-db/file-manager';
import { IconsFakeDb } from '../fake-db/fake-db/icons';
import { InvoiceFakeDb } from '../fake-db/fake-db/invoice';
import { KnowledgeBaseFakeDb } from '../fake-db/fake-db/knowledge-base';
import { MailFakeDb } from '../fake-db/fake-db/mail';
import { ProfileFakeDb } from '../fake-db/fake-db/profile';
import { QuickPanelFakeDb } from '../fake-db/fake-db/quick-panel';
import { ScrumboardFakeDb } from '../fake-db/fake-db/scrumboard';
import { SearchFakeDb } from '../fake-db/fake-db/search';
import { TodoFakeDb } from '../fake-db/fake-db/todo';


export class FakeDbService implements InMemoryDbService
{
    createDb(): any
    {
        return {
            // Dashboards
            'project-dashboard-projects' : ProjectDashboardDb.projects,
            'project-dashboard-widgets'  : ProjectDashboardDb.widgets,
            'analytics-dashboard-widgets': AnalyticsDashboardDb.widgets,

            // Calendar
            

            // E-Commerce
            'e-commerce-products' : ECommerceFakeDb.products,
            'e-commerce-orders'   : ECommerceFakeDb.orders,

            // Academy
            'academy-categories': AcademyFakeDb.categories,
            'academy-courses'   : AcademyFakeDb.courses,
            'academy-course'    : AcademyFakeDb.course,

            // Mail
            'mail-mails'  : MailFakeDb.mails,
            'mail-folders': MailFakeDb.folders,
            'mail-filters': MailFakeDb.filters,
            'mail-labels' : MailFakeDb.labels,

            // Chat
            'chat-contacts': ChatFakeDb.contacts,
            'chat-chats'   : ChatFakeDb.chats,
            'chat-user'    : ChatFakeDb.user,

            // File Manager
            'file-manager': FileManagerFakeDb.files,

            // Contacts
            'contacts-contacts': ContactsFakeDb.contacts,
            'contacts-user'    : ContactsFakeDb.user,

            // Todo
            'todo-todos'  : TodoFakeDb.todos,
            'todo-filters': TodoFakeDb.filters,
            'todo-tags'   : TodoFakeDb.tags,

            // Scrumboard
            'scrumboard-boards': ScrumboardFakeDb.boards,

            // Invoice
            'invoice': InvoiceFakeDb.invoice,

            // Profile
            'profile-timeline'     : ProfileFakeDb.timeline,
            'profile-photos-videos': ProfileFakeDb.photosVideos,
            'profile-about'        : ProfileFakeDb.about,

            // Search
            'search': SearchFakeDb.search,

            // FAQ
            'faq': FaqFakeDb.data,

            // Knowledge base
            'knowledge-base': KnowledgeBaseFakeDb.data,

            // Icons
            'icons': IconsFakeDb.icons,

            // Chat Panel
            'chat-panel-contacts' : ChatPanelFakeDb.contacts,
            'chat-panel-chats': ChatPanelFakeDb.chats,
            'chat-panel-user': ChatPanelFakeDb.user,

            // Quick Panel
            'quick-panel-notes' : QuickPanelFakeDb.notes,
            'quick-panel-events': QuickPanelFakeDb.events
        };
    }
}
