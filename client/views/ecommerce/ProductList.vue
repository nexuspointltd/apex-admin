<template>
    <div>
        <vuetable ref="vuetable"
                  api-url="https://oakmere.dev/api/ecommerce/products"
                  :fields="fields"
                  pagination-path="pagination"
                  :css="css.table"
                  @vuetable:pagination-data="onPaginationData"
        >
            <template slot="actions" scope="props">
                <div class="table-button-container">
                    <router-link :to="{ name: 'EditProduct', params: { id: props.rowData.id }}" class="btn btn-primary">
                        <i class="fa fa-edit"></i>
                        Edit
                    </router-link>
                    <a class="btn btn-default"><i class="fa fa-edit"></i> View</a>
                </div>
            </template>
        </vuetable>
        <vuetable-pagination-info ref="paginationInfo"
                                  info-class="pagination-info"
        ></vuetable-pagination-info>
        <vuetable-pagination ref="pagination"
                             :css="css.pagination"
                             @vuetable-pagination:change-page="onChangePage"
        ></vuetable-pagination>
    </div>
</template>

<script>
    //    import accounting from 'accounting'
    //    import moment from 'moment'
    import Vue from 'vue'
    import Vuetable from 'vuetable-2/src/components/Vuetable'
    import VuetablePagination from 'vuetable-2/src/components/VuetablePagination'
    import VuetablePaginationInfo from 'vuetable-2/src/components/VuetablePaginationInfo'
    import CustomActions from './CustomActions'

//    Vue.component('custom-actions', CustomActions)

    export default {
        components: {
            Vuetable,
            VuetablePagination,
            VuetablePaginationInfo,
        },

        data() {
            return {
                fields: [
                    {
                        name: 'name',
                        sortField: 'name',
                        title: 'Name'
                    },
                    {
                        name: 'category_name',
                        sortField: 'category_name',
                        title: 'Category'
                    },
                    {
                        name: '__slot:actions',
                        title: 'Actions',
                        titleClass: 'has-text-centered',
                        dataClass: 'has-text-centered',
                    }
                ],
                css: {
                    table: {
                        tableClass: 'table table-striped',
                        loadingClass: 'loading',
                        ascendingIcon: 'glyphicon glyphicon-chevron-up',
                        descendingIcon: 'glyphicon glyphicon-chevron-down',
                        sortHandleIcon: 'glyphicon glyphicon-menu-hamburger',
                    },
                    Pagination: {
                        wrapperClass: 'pagination pull-right',
                        activeClass: 'active',
                        disabledClass: 'disabled',
                        pageClass: '',
                        linkClass: '',
                    },
                    icons: {
                        first: 'glyphicon glyphicon-step-backward',
                        prev: 'glyphicon glyphicon-chevron-left',
                        next: 'glyphicon glyphicon-chevron-right',
                        last: 'glyphicon glyphicon-step-forward',
                    },
                }
            }
        },

        methods: {
            //...
            onPaginationData(paginationData)
            {
                this.$refs.pagination.setPaginationData(paginationData)
                this.$refs.paginationInfo.setPaginationData(paginationData)   // <----
            }
            ,
            onChangePage(page)
            {
                this.$refs.vuetable.changePage(page)
            }
        }
    }
</script>