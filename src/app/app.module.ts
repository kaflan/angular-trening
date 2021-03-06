import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { EffectsModule } from '@ngrx/effects'
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { AuthModule } from 'src/app/auth/auth.module'
import { environment } from 'src/environments/environment'
import { TopBarModule } from './shared/modules/topBar/topBar.module'
import { PersistentService } from './shared/services/persistent.service'
import { AuthInterceptor } from './shared/services/authinterceptor.service'
import { GlobalFeedModule } from './globalFeed/globalFeed.module'
import { YourFeedModule } from './your-feed/your-feed.module';
import { TagFeedModule } from './tag-feed/tag-feed.module'
import { ArticleModule } from './article/article.module';
import {CreateArticleModule} from "./create-article/create-article.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    HttpClientModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    TopBarModule,
    GlobalFeedModule,
    YourFeedModule,
    TagFeedModule,
    ArticleModule,
    CreateArticleModule
  ],
  providers: [
    PersistentService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
