import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component = new AppComponent
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('show msg alert', () => {
    expect(component.showmsg('hello')).toBe('hello')
  })
  //for addition method
  it('additon method test cases', () => {
    expect(component.addition(20, 30)).toBe(50)
    expect(component.addition(10, 20)).toBeGreaterThan(25)
  })
  //tobe and toEqual matchers
  it('tobe and toEqual matcher', () => {
    let a = 1;
    let b = 1;
    let array1 = ['1']
    let array2 = ['1']

    expect(a).toBe(b)
    expect(a).toEqual(b)

    //expect(array1).toBe(array2) //this test will fail cause tobe doesnt work for non primitive
    expect(array1).toEqual(array2)


  })
  //checks tobetrue,tobetruthy, tobefalse, tobefalsy
  it('tobetrue,tobefalse,tobefalsy,tobetruthy', () => {
    let a = true
    expect(a).toBeTrue() //it doesn't take any paramete
    //expect(a).toBeFalse() // it will pass the test if the value is false
    expect('hello').toBeTruthy() // it will pass cause hello is truthy value
    //expect(undefined).toBeTruthy() // this will not pass cause undefined is a falsy value
    expect(undefined).toBeFalsy()// it will pass
  })
  //check tobe greater than , tobelessthan , tobeGreaterThanOrEqual, tobeLessThanOrEqual
  it('tobegreater than, greaterthanOrEqual lessthan lessThanOreQual', () => {
    let a = 10
    expect(a).toBeGreaterThan(5)
    expect(10).toBeGreaterThanOrEqual(a)
    // expect(10).toBeLessThan(a) //this will not match
    expect(10).toBeLessThanOrEqual(a)
  })
  //toMatch matcher for checking regular expression
  it('tomatch tobecloseto', () => {
    let inputStr = "JoyMahmud"
    let inputNum = '019-26-12-65'
    let pi = 3.1416
    expect(inputStr).toMatch(/Joy/)
    expect(inputStr).not.toMatch(/Joy1/)
    expect(inputNum).toMatch(/\d{3}-\d{2}-\d{2}-\d{2}/)
    expect(pi).toBeCloseTo(3.00, 0)
  })
  //tobedefined and tobeundefined matcher
  it('tobeDefined and tobeUndefined', () => {
    let myObj = {
      foo: 'foo'
    }
    let myfn = (function () { })()
    let strUndfined
    expect(myObj).toBeDefined() //retunrns true
    expect(strUndfined).toBeUndefined()
    //expect(myfn).toBeDefined() //this will not pass the test
  })
  //tocontain tobeNan, toBepositiveInfinity, tobeNegativeInfinity
  it('tocontain tobeNan, toBepositiveInfinity, tobeNegativeInfinity',()=>{
    expect(0/0).toBeNaN()
    expect([1,2,3,4]).toContain(3)
  })
});
