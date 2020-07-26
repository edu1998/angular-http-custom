import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CONFIG_MODULE} from './resources/constants/label.constants';
import {ConfigType} from './resources/types/config.type';



@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
})
export class HttpModule {
  constructor(@Optional() @SkipSelf() parentModule?: HttpModule) {
    if (parentModule) {
      throw new Error(
        'HttpModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: ConfigType): ModuleWithProviders<HttpModule> {
    return {
      ngModule: HttpModule,
      providers: [
        {provide: CONFIG_MODULE, useValue: config},
      ]
    };
  }
}
