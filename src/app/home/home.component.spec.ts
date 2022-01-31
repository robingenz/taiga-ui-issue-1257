import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TuiNotificationModule, TuiNotificationsService } from '@taiga-ui/core';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let notificationsServiceSpy: jest.Mocked<TuiNotificationsService>;

  beforeEach(async () => {
    notificationsServiceSpy = createSpyObj<TuiNotificationsService>('TuiNotificationsService', {
      show: undefined,
    });

    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      providers: [ { provide: TuiNotificationsService, useValue: notificationsServiceSpy } ],
      imports: [ TuiNotificationModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

const createSpyObj = <T = any>(
  _baseName: string,
  methodNames: { [methodName: string]: any },
): jest.Mocked<T> => {
  let obj: any = {};

  for (const key in methodNames) {
    if (methodNames.hasOwnProperty(key)) {
      const value = methodNames[key];
      obj[key] = jest.fn(value);
    }
  }

  return obj;
};
