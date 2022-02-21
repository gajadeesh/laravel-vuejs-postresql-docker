import { mount } from "@vue/test-utils";
import defaultTable from "@/components/tables/default-table.vue";

describe("Render User Table", () => {
  it("Checking the user table listing it out", async () => {
    const data = {
      users: [
        {
          name: "user",
          email: "user@gmail.com",
          gender: "male",
          status: "inactive",
        },
      ],
      loading: false,
    };
    const wrapper = mount(defaultTable);
    await wrapper.setProps(data);

    //checking the listing text values
    expect(wrapper.find("#name").text()).toBe("user");
    expect(wrapper.find("#email").text()).toBe("user@gmail.com");
    expect(wrapper.find("#gender").text()).toBe("male");
    expect(wrapper.find("#status").text()).toBe("inactive");
  });
});
