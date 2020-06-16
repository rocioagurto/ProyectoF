import {mount} from "@vue/test-utils";
import {expect} from 'chai';
import Register from '@/components/Register'

describe('Register.vue', () => {
    //Given/Arrange (dado que existe...)Precondiciones
    const wrapper = mount(Register)
    let checkbox = wrapper.find('input[type="checkbox"]')
    let registerBtn = wrapper.find('button[type="submit"]')
    
    it('has a disabled button',  ()=>{
        //When/Act(cuando pasa cierta cosa o evento)
        checkbox.setChecked(false)

        //Then/Assert (entonces, pasa cierta otra cosa)resultado
        expect(registerBtn.classes('is-disabled')).to.be.true
    })
     it('has a button not disabled when checkbox is checked', ()=> {
        checkbox.setChecked(true)
        expect(registerBtn.classes('is-disabled')).to.be.false
    })
    it('registers a User', ()=>{
        // 0) Cargar el componente con los metodos de prueba
        let isSent = false
        function stubMethod(){isSent = true}
        const wrapper = mount(Register, {
            methods: {
                submitForm: stubMethod
            },
        })
        // 1) Encontrar los campos necesarios
        let userName = wrapper.find('input[type="text"]')
        let email = wrapper.find('input[type="email"]')
        let password = wrapper.find('input[type="password"]')
        let registerBtn = wrapper.find('button[type="submit"]')
        // 2)Asignar valores a los campos
       userName.setValue('Baltazar Bratt')
       email.setValue('bbratt@hollywood.com')
       password.setValue('DanceFight')
        // 3)Enviar formulario
        registerBtn.trigger('click')
        // 4)Probar que se envío el registro
        expect(isSent).to.be.true
    })
})