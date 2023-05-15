import { BehaviorSubject } from 'rxjs';

export class ActivatedRouteStub {
    private dataSubject = new BehaviorSubject<object>({});

    readonly data = this.dataSubject.asObservable();

    setData(data: object) {
        this.dataSubject.next(data);
    }
}
