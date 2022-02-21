import { mount } from "@vue/test-utils";
import UserForm from "@/views/userForm.vue";

describe("Render User form", () => {
  it("Checking passing props to the data", async () => {
    const data = {
      data: {
        name: "user",
        email: "user@gmail.com",
        gender: "male",
        status: "inactive",
      },
      title: "Create User",
    };
    const wrapper = mount(UserForm);
    await wrapper.setProps(data);

    //checking all props
    expect(wrapper.props().title).toBe("Create User");
    expect(wrapper.props().data.name).toBe("user");
    expect(wrapper.props().data.email).toBe("user@gmail.com");
    expect(wrapper.props().data.gender).toBe("male");
    expect(wrapper.props().data.status).toBe("inactive");
  });

  it("Checking passing props in the inputs", async () => {
    const data = {
      data: {
        name: "user",
        email: "user@gmail.com",
        gender: "male",
        status: "active",
      },
      title: "Create User",
    };
    const wrapper = mount(UserForm);
    await wrapper.setProps(data);

    //checking all inputs
    expect(wrapper.find("#name").element.value).toBe("user");
    expect(wrapper.find("#email").element.value).toBe("user@gmail.com");
    expect(wrapper.find("#gender").element.value).toBe("male");
    expect(wrapper.find("#status").element.checked).toBeTruthy();
  });

  it("Checking updating the inputs", async () => {
    const wrapper = mount(UserForm);

    //set new values
    await wrapper.find("#name").setValue("Muhamad");
    await wrapper.find("#email").setValue("muhamad@gmail.com");
    await wrapper.find("#gender").setValue("female");
    await wrapper.find("#status").setChecked(false);

    expect(wrapper.find("#name").element.value).toContain("Muhamad");
    expect(wrapper.find("#email").element.value).toContain("muhamad@gmail.com");
    expect(wrapper.find("#gender").element.value).toContain("female");
    expect(wrapper.find("#status").element.checked).toBe(false);
    
  });
});
