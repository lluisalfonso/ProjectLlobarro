import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';

import { AppComponent } from './app.component';

// firebase
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import {environment} from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore'
import { AngularFireStorageModule, AngularFireStorage} from 'angularfire2/storage';

// components
import { UsersComponent } from './components/users/users.component';
import { UsersListComponent } from './components/users/users-list/users-list.component';
import { UserComponent } from './components/users/user/user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { NotfoundpageComponent } from './components/notfoundpage/notfoundpage.component';
import { PrivatepageComponent } from './components/privatepage/privatepage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import { TermespageComponent } from './components/termespage/termespage.component';
import { Reset } from '../app/components/reset/reset.component';


// services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { PostService } from './services/post.service';

import {AuthGuard} from './guards/auth.guard';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/posts/post/post.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { DropZoneDirective } from './drop-zone.directive';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { PanelusuariComponent } from './components/panelusuari/panelusuari.component';


const routes: Routes = [
    { path: '', component: HomepageComponent },
    { path: 'login', component: LoginpageComponent },
    { path: 'register', component: RegisterpageComponent },
    { path: 'private', component: PrivatepageComponent ,canActivate : [AuthGuard]},
    { path: 'termes-i-condicions', component: TermespageComponent },
    { path: 'reset',component: Reset},
    { path: 'userpanel', component: PanelusuariComponent },
    { path: '**', component: NotfoundpageComponent } //Sempre la ultima, si no peta 

    

];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UsersListComponent,
    UserComponent,
    NavbarComponent,
    HomepageComponent,
    LoginpageComponent,
    NotfoundpageComponent,
    PrivatepageComponent,
    RegisterpageComponent,
    Reset,
    TermespageComponent,
    PostsComponent,
    PostComponent,
    PostListComponent,
    DropZoneDirective,
    FileUploadComponent,
    PanelusuariComponent

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
      UserService,
      AuthService,
      PostService,
      AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
