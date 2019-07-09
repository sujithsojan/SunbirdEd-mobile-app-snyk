import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { RouterLinks } from './app.constant';
import { HasNotBeenOnboardedGuard } from '@app/guards/has-not-been-onboarded.guard';
import { ShouldDisplayProfileSettingsGuard } from '@app/guards/should-display-profile-settings.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: RouterLinks.TABS,
    pathMatch: 'full',
  },
  {
    path: RouterLinks.TABS,
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  {
    path: 'language-settings',
    loadChildren: './language-settings/language-settings.module#LanguageSettingsModule',
    canLoad: [HasNotBeenOnboardedGuard],
  },
  {
    path: 'user-type-selection',
    loadChildren: './user-type-selection/user-type-selection.module#UserTypeSelectionPageModule',
    canLoad: [HasNotBeenOnboardedGuard],
  },
  {
    path: 'profile-settings',
    loadChildren: './profile-settings/profile-settings.module#ProfileSettingsPageModule',
    canLoad: [HasNotBeenOnboardedGuard, ShouldDisplayProfileSettingsGuard],
  },
  {
    path: RouterLinks.USER_AND_GROUPS,
    loadChildren: './user-and-groups/user-and-groups.module#UserAndGroupsPageModule'
  },
  {
    path: 'resources',
    loadChildren: './resources/resources.module#ResourcesModule',
  },
  {
    path: 'view-more-activity', loadChildren: './view-more-activity/view-more-activity.module#ViewMoreActivityModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsPageModule'
  },
  { path: 'download-manager', loadChildren: './download-manager/download-manager.module#DownloadManagerPageModule' },
  { path: 'storage-settings', loadChildren: './storage-settings/storage-settings.module#StorageSettingsPageModule' },
  { path: 'courses', loadChildren: './courses/courses.module#CoursesPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: RouterLinks.PROFILE, loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'active-downloads', loadChildren: './active-downloads/active-downloads.module#ActiveDownloadsPageModule' },
  { path: 'course-batches', loadChildren: './course-batches/course-batches.module#CourseBatchesPageModule' },
  {
    path: 'enrolled-course-details-page', loadChildren:
      './enrolled-course-details-page/enrolled-course-details-page.module#EnrolledCourseDetailsPagePageModule'
  },
  { path: 'qrscanner-alert', loadChildren: './qrscanner-alert/qrscanner-alert.module#QrscannerAlertPageModule' },
  { path: 'course-batches', loadChildren: './course-batches/course-batches.module#CourseBatchesPageModule' },
  { path: 'collection-detail-etb', loadChildren: './collection-detail-etb/collection-detail-etb.module#CollectionDetailEtbPageModule' },
  {
    path: 'enrollment-details-page', loadChildren:
      './enrolled-course-details-page/enrollment-details-page/enrollment-details-page.module#EnrollmentDetailsPagePageModule'
  },
  { path: 'collection-details', loadChildren: './collection-details/collection-details.module#CollectionDetailsPageModule' },
  { path: 'content-details', loadChildren: './content-details/content-details.module#ContentDetailsPageModule' },
  { path: RouterLinks.PLAYER, loadChildren: './player/player.module#PlayerPageModule' },
  { path: 'page-filter', loadChildren: './page-filter/page-filter.module#PageFilterPageModule' },
  { path: 'page-filter-options', loadChildren: './page-filter/page-filter-options/page-filter-options.module#PageFilterOptionsPageModule' },
  { path: 'qrcoderesult', loadChildren: './qrcoderesult/qrcoderesult.module#QrcoderesultPageModule' },
  { path: RouterLinks.NOTIFICATION, loadChildren: './notification/notification.module#NotificationPageModule' },
  { path: 'faq-help', loadChildren: './faq-help/faq-help.module#FaqHelpPageModule' },
  { path: 'terms-and-conditions', loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [HasNotBeenOnboardedGuard, ShouldDisplayProfileSettingsGuard],
})
export class AppRoutingModule { }
