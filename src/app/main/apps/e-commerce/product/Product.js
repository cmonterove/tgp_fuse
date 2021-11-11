import FuseLoading from '@fuse/core/FuseLoading';
import FusePageCarded from '@fuse/core/FusePageCarded';
import { useDeepCompareEffect } from '@fuse/hooks';
import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import withReducer from 'app/store/withReducer';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import _ from '@lodash';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { resetProduct, newProduct, getProduct } from '../store/productSlice';
import reducer from '../store';
import ProductHeader from './ProductHeader';
import BasicInfoTab from './tabs/BasicInfoTab';
import InventoryTab from './tabs/InventoryTab';
import PricingTab from './tabs/PricingTab';
import ProductImagesTab from './tabs/ProductImagesTab';
import ShippingTab from './tabs/ShippingTab';
import './style.css'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  name: yup
    .string()
    .required('You must enter a product name')
    .min(5, 'The product name must be at least 5 characters'),
});

function Product(props) {
  const dispatch = useDispatch();
  const product = useSelector(({ eCommerceApp }) => eCommerceApp.product);

  const routeParams = useParams();
  const [tabValue, setTabValue] = useState(0);
  const [noProduct, setNoProduct] = useState(false);
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {},
    resolver: yupResolver(schema),
  });
  const { reset, watch, control, onChange, formState } = methods;
  const form = watch();

  useDeepCompareEffect(() => {
    function updateProductState() {
      const { productId } = routeParams;

      if (productId === 'new') {
        /**
         * Create New Product data
         */
        dispatch(newProduct());
      } else {
        /**
         * Get Product data
         */
        dispatch(getProduct(routeParams)).then((action) => {
          /**
           * If the requested product is not exist show message
           */
          if (!action.payload) {
            setNoProduct(true);
          }
        });
      }
    }

    updateProductState();
  }, [dispatch, routeParams]);

  useEffect(() => {
    if (!product) {
      return;
    }
    /**
     * Reset the form on product state changes
     */
    reset(product);
  }, [product, reset]);

  useEffect(() => {
    return () => {
      /**
       * Reset Product on component unload
       */
      dispatch(resetProduct());
      setNoProduct(false);
    };
  }, [dispatch]);

  /**
   * Tab Change
   */
  function handleTabChange(event, value) {
    setTabValue(value);
    console.log(value)
  }

  /**
   * Show Message if the requested products is not exists
   */
  if (noProduct) {
    return (
      <div>
        {/* <h1>Grid Layout</h1>

          <p>This grid layout contains six columns and three rows:</p>

          <div className="grid-container"> 
            <div className="item1">Datos del comprador</div>
            <div className="item3">Main</div>  
            <div className="item4">Right</div>
            <div className="item5">Footer</div>
          </div> */}

{/* <div className="parent">
<div className="div1">Datos del comprador </div>
<div className="div2"><input type="text" placeholder="Nombre completo" /></div>
<div className="div3"> <input type="text" placeholder="Cedula" /></div>
<div className="div4"> <input type="text" placeholder="Estado civil"/></div>
<div className="div5"> <input type="text" placeholder="Nacionalidad"/></div>
</div>
<br/>

<div className="parent">
<br/>
<div className="div1">Datos del vendedor </div>
<div className="div2"><input type="text" placeholder="Nombre completo" /></div>
<div className="div3"> <input type="text" placeholder="Cedula" /></div>
<div className="div4"> <input type="text" placeholder="Estado civil"/></div>
<div className="div5"> <input type="text" placeholder="Nacionalidad"/></div>
<div className="div1"><input type="text" placeholder="Domicilio"/> </div>
</div>

<div className="parent_1">
<div className="div1_1">Datos del vehículo </div>
<div className="div2_1"><input type="text" placeholder="Placa del vehículo" /></div>
<div className="div3_1"> <input type="text" placeholder="Serial N.I.V" /></div>
<div className="div4_1"> <input type="text" placeholder="Serial de carroceria"/></div>
<div className="div5_1"> <input type="text" placeholder="Serial del motor"/></div>
<div className="div6_1"><input type="text" placeholder="Marca" /></div>
<div className="div7_1"> <input type="text" placeholder="Modelo" /></div>
<div className="div8_1"> <input type="text" placeholder="Año"/></div>
<div className="div9_1"> <input type="text" placeholder="Color"/></div>
<div className="div10_1"><input type="text" placeholder="Clase" /></div>
<div className="div11_1"> <input type="text" placeholder="Tipo" /></div>
<div className="div12_1"> <input type="text" placeholder="Uso"/></div>
<div className="div13_1"> <input type="text" placeholder="Número de puestos"/></div>
</div>
<br/>

<div className="parent">
<br/>
<div className="div1">Datos de la transacción </div>
<div className="div2"><input type="text" placeholder="Precio de la venta" /></div>
<div className="div3"> <input type="text" placeholder="Modalidad de pago" /></div>
<div className="div4"> <input type="text" placeholder="Numero de cheque"/></div>
<div className="div5"> <input type="text" placeholder="Banco"/></div>
<div className="div1"><input type="text" placeholder="Monto"/> </div>
</div> */}



<div className="parent">
        <div className="div1">Datos del comprador  </div>
        <div className="div2"><input type="text" placeholder="Nombre completo" /> </div>
        <div className="div3"><input type="text" placeholder="Cedula" /> </div>
        <div className="div4"><input type="text" placeholder="Estado civil"/> </div>
        <div className="div5"><input type="text" placeholder="Nacionalidad"/> </div>


        <div className="div6">Datos del vendedor </div>
        <div className="div7"><input type="text" placeholder="Nombre completo" /> </div>
        <div className="div8"><input type="text" placeholder="Cedula" /> </div>
        <div className="div9"> <input type="text" placeholder="Estado civil"/></div>
        <div className="div10"><input type="text" placeholder="Nacionalidad"/> </div>
        <div className="div11"><input type="text" placeholder="Domicilio"/> </div>


        <div className="div12">Datos del vehículo </div>
        <div className="div13"><input type="text" placeholder="Placa del vehículo" /> </div>
        <div className="div14"> <input type="text" placeholder="Serial N.I.V" /></div>
        <div className="div15"> <input type="text" placeholder="Serial de carroceria"/></div>
        <div className="div16"> <input type="text" placeholder="Serial del motor"/></div>
        <div className="div17"> <input type="text" placeholder="Marca" /></div>
        <div className="div18"> <input type="text" placeholder="Modelo" /></div>
        <div className="div19"> <input type="text" placeholder="Año"/></div>
        <div className="div20"> <input type="text" placeholder="Color"/></div>
        <div className="div21"><input type="text" placeholder="Clase" /> </div>
        <div className="div22"> <input type="text" placeholder="Tipo" /></div>
        <div className="div23"> <input type="text" placeholder="Uso"/></div>
        <div className="div24"> <input type="text" placeholder="Número de puestos"/></div>

        <div className="div25">Datos de la transacción </div>
        <div className="div26"> <input type="text" placeholder="Precio de la venta" /></div>
        <div className="div27"> <input type="text" placeholder="Modalidad de pago" /></div>
        <div className="div28"> <input type="text" placeholder="Numero de cheque"/></div>
        <div className="div29"> <input type="text" placeholder="Banco"/></div>
        <div className="div30"> <input type="text" placeholder="Monto"/></div>
        <div className="div31"> </div>
        </div>

        <Button
          to="/Main/Home"
          className="justify-start px-32"
          color="primary"
          variant="outlined"
          component={Link}
        >
          Enviar
        </Button>
      </div>

      // <div>
        // {/* <Tabs
        //     value={tabValue}
        //     onChange={handleTabChange}
        //     indicatorColor="primary"
        //     textColor="primary"
        //     variant="scrollable"
        //     scrollButtons="auto"
        //     classes={{ root: 'w-full h-64' }}
        //   >
        //     <Tab className="h-64" label="Basic Info" />
        //     <Tab className="h-64" label="Product Images" />
        //     <Tab className="h-64" label="Pricing" />
        //     <Tab className="h-64" label="Inventory" />
        //     <Tab className="h-64" label="Shipping" />
        //   </Tabs> */}
          // {/* <BasicInfoTab /> */}
      // </div>

      // if(tabValue == 0){
      //   <div>
      //     <BasicInfoTab />
      //   </div>
      // }

      // <div>
      //     <BasicInfoTab />
      // </div>
      

      // <div>
      //   <div className="p-16 sm:p-24 max-w-2xl">
      //        <div className={tabValue !== 0 ? 'hidden' : ''}>
      //          <BasicInfoTab />
      //        </div>

      //        <div className={tabValue !== 1 ? 'hidden' : ''}>
      //          <ProductImagesTab />
      //        </div>

      //        <div className={tabValue !== 2 ? 'hidden' : ''}>
      //          <PricingTab />
      //        </div>

      //        <div className={tabValue !== 3 ? 'hidden' : ''}>
      //          <InventoryTab />
      //        </div>

      //        <div className={tabValue !== 4 ? 'hidden' : ''}>
      //          <ShippingTab />
      //        </div>
      //      </div>
      // </div>

    //   <FusePageCarded
    //     classes={{
    //       toolbar: 'p-0',
    //       header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
    //     }}
    //     header={<ProductHeader />}
    //     contentToolbar={
    //       <Tabs
    //         value={tabValue}
    //         onChange={handleTabChange}
    //         indicatorColor="primary"
    //         textColor="primary"
    //         variant="scrollable"
    //         scrollButtons="auto"
    //         classes={{ root: 'w-full h-64' }}
    //       >
    //         <Tab className="h-64" label="Basic Info" />
    //         <Tab className="h-64" label="Product Images" />
    //         <Tab className="h-64" label="Pricing" />
    //         <Tab className="h-64" label="Inventory" />
    //         <Tab className="h-64" label="Shipping" />
    //       </Tabs>
    //     }
    //     content={
    //       <div className="p-16 sm:p-24 max-w-2xl">
    //         <div className={tabValue !== 0 ? 'hidden' : ''}>
    //           <BasicInfoTab />
    //         </div>

    //         <div className={tabValue !== 1 ? 'hidden' : ''}>
    //           <ProductImagesTab />
    //         </div>

    //         <div className={tabValue !== 2 ? 'hidden' : ''}>
    //           <PricingTab />
    //         </div>

    //         <div className={tabValue !== 3 ? 'hidden' : ''}>
    //           <InventoryTab />
    //         </div>

    //         <div className={tabValue !== 4 ? 'hidden' : ''}>
    //           <ShippingTab />
    //         </div>
    //       </div>
    //     }
    //     innerScroll
    //   />
    // </FormProvider>



      // <motion.div
      //   initial={{ opacity: 0 }}
      //   animate={{ opacity: 1, transition: { delay: 0.1 } }}
      //   className="flex flex-col flex-1 items-center justify-center h-full"
      // >
      //   <Typography color="textSecondary" variant="h5">
      //     There is no such product!
      //   </Typography>
      //   <Button
      //     className="mt-24"
      //     component={Link}
      //     variant="outlined"
      //     to="/apps/e-commerce/products"
      //     color="inherit"
      //   >
      //     Go to Products Page
      //   </Button>
      // </motion.div>
    );
  }

  /**
   * Wait while product data is loading and form is setted
   */
  if (
    _.isEmpty(form) ||
    (product && routeParams.productId !== product.id && routeParams.productId !== 'new')
  ) {
    return <FuseLoading />;
  }

  return (
    <FormProvider {...methods}>
      <FusePageCarded
        classes={{
          toolbar: 'p-0',
          header: 'min-h-72 h-72 sm:h-136 sm:min-h-136',
        }}
        header={<ProductHeader />}
        contentToolbar={
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            classes={{ root: 'w-full h-64' }}
          >
            <Tab className="h-64" label="Basic Info" />
            <Tab className="h-64" label="Product Images" />
            <Tab className="h-64" label="Pricing" />
            <Tab className="h-64" label="Inventory" />
            <Tab className="h-64" label="Shipping" />
          </Tabs>
        }
        content={
          <div className="p-16 sm:p-24 max-w-2xl">
            <div className={tabValue !== 0 ? 'hidden' : ''}>
              <BasicInfoTab />
            </div>

            <div className={tabValue !== 1 ? 'hidden' : ''}>
              <ProductImagesTab />
            </div>

            <div className={tabValue !== 2 ? 'hidden' : ''}>
              <PricingTab />
            </div>

            <div className={tabValue !== 3 ? 'hidden' : ''}>
              <InventoryTab />
            </div>

            <div className={tabValue !== 4 ? 'hidden' : ''}>
              <ShippingTab />
            </div>
          </div>
        }
        innerScroll
      />
    </FormProvider>
  );
}

export default withReducer('eCommerceApp', reducer)(Product);
