import { AppComponent } from '@src/app/app.component';
import { nsTestBedBeforeEach, nsTestBedAfterEach, nsTestBedRender } from '@nativescript/angular/testing';

describe('App Component', () => {

    beforeEach(nsTestBedBeforeEach(
        [AppComponent],
        [],
        []));
    afterEach(nsTestBedAfterEach());


    it('should be defined!', () => {
        return nsTestBedRender(AppComponent).then((fixture) => {
            fixture.detectChanges();
            const component = fixture.componentInstance;
            expect(component).toBeTruthy();
        });
    });

   
});
