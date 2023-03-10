<template>
  <dashboard-menu>
 <section>
        <div class="container">
            <div class="card">
                <div class="card-header d-flex justify-content-between">
                    <h3>Create Article</h3>
                  </div>

                <div class="card-body">
                   <div class="row">
                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="title">Title<span class="text-danger">*</span></label>
                                    <input id="title" class="form-control" type="text" name="title" >
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                    <label for="description">Description</label>
                                    <textarea id="description" class="form-control summernote" name="description" rows="3"></textarea>
                                </div>
                            </div>


                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="category_id">Category <span class="text-danger">*</span></label>
                                    <select id="category_id" class="form-control" name="category_id">
                                               </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="tags">Tags<span class="text-danger">*</span></label>
                                    <input id="tags" class="form-control" type="tags" name="tags">
                                </div>
                            </div>

                           <div class="col-md-6">
                            <div class="form-group">
                                <label for="payment_category_id">Payment Category</label>
                                <select id="payment_category_id" class="form-control" name="payment_category_id">
                                    </select>
                            </div>
                           </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="type_id">Type<span class="text-danger">*</span></label>
                                        <select id="type_id" class="form-control" name="type_id">
                                          </select>
                                    </div>
                                </div>

                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="max_age">Max Age<span class="text-danger">*</span></label>
                                            <input id="max_age" class="form-control" type="text" name="max_age" >
                                        </div>
                                    </div>

                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="image">Upload image <span class="text-danger">*</span></label>
                                    <input id="image" class="form-control-file" type="file" name="image">
                                </div>
                            </div>

                         <div class="col-md-12">
                          <button type="submit" class="btn btn-primary">Save Record</button>
                         </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
      
  </dashboard-menu>
</template>

<script>
import DashboardMenu from "@/components/DashboardMenu.vue";
export default {
  components: { DashboardMenu },
};
</script>

<style>
</style>
